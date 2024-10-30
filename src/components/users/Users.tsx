"use client";
import React, { useState } from "react";
import styles from "../../styles/users.module.scss";
import Cards from "./Cards";
import UsersCardIcon from "@/assets/user-cards/Users";
import ActiveUsers from "@/assets/user-cards/ActiveUsers";
import WithLoans from "@/assets/user-cards/WithLoans";
import WithSavings from "@/assets/user-cards/WithSavings";
import { MdFilterList } from "react-icons/md";
import { tableHeaders } from "@/lib/useful";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/services/fetchUsers";
import Loader from "../loader/Loader";
import { FiMoreVertical } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuEye, LuUserX } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import Link from "next/link";

const cardsData = [
  {
    id: 1,
    title: "Users",
    icon: UsersCardIcon,
    amount: "2,453",
  },
  {
    id: 2,
    title: "Active Users",
    icon: ActiveUsers,
    amount: "2,453",
  },
  {
    id: 3,
    title: "Users with Loans",
    icon: WithLoans,
    amount: "12,453",
  },
  {
    id: 4,
    title: "Users with Savings",
    icon: WithSavings,
    amount: "102,453",
  },
];

const Users = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["fetchingUsers"],
    queryFn: () => fetchUsers(),
  });

  const [dropdownUserId, setDropdownUserId] = useState<string | null>(null);
  const [itemsPerPage] = useState(7);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users?.length / itemsPerPage);

  const handlePageClick = ({ selected }: any) => {
    const newOffset = selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleDrop = (id: string) => {
    setDropdownUserId(dropdownUserId === id ? null : id);
  };

  //   console.log("users==", users);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>Users</h2>
      <div className={styles.cards}>
        {cardsData?.map((data) => (
          <Cards
            key={data.id}
            title={data.title}
            icon={data.icon}
            amount={data.amount}
          />
        ))}
      </div>
      {/* table */}
      <div className={styles.mainContainer}>
        <div className={styles.tableContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            <table>
              <thead>
                <tr className={styles.tableH}>
                  {tableHeaders?.map((header, i: any) => (
                    <th key={i}>
                      {header}
                      <MdFilterList />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users?.length > 0 ? (
                  currentItems?.map((user: any) => (
                    <tr key={user?._id} className={styles.tableBod}>
                      <td>{user?.organization}</td>
                      <td>{user?.personalInfo?.fullName}</td>
                      <td>{user?.personalInfo?.emailAddress}</td>
                      <td>{user?.personalInfo?.phoneNumber}</td>
                      <td>{user?.createdAt.slice(0, 10)}</td>
                      <td>{user?.status}</td>
                      <td>
                        <FiMoreVertical
                          onClick={() => handleDrop(user?._id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                      {dropdownUserId === user?._id && (
                        <div className={styles.drop}>
                          <div className={styles.dropMain}>
                            <Link
                              href={`/users/${user?._id}`}
                              style={{ textDecorationLine: "none" }}
                              className={styles.dropList}
                            >
                              <LuEye />
                              <p>View Details</p>
                            </Link>
                            <div className={styles.dropList}>
                              <LuUserX />
                              <p>Blacklist User</p>
                            </div>
                            <div className={styles.dropList}>
                              <GrUserExpert />
                              <p>Activate User</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </tr>
                  ))
                ) : (
                  <p>No Users!</p>
                )}
              </tbody>
            </table>
          )}
        </div>
        <div className={styles.pagContainer}>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FaAngleRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<FaAngleLeft />}
            containerClassName={styles.paginationContainer}
            activeClassName={styles.paginationActive}
            pageClassName={styles.eachElem}
            previousLinkClassName={styles.prevBtnClass}
            nextLinkClassName={styles.nexBtnClass}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;

"use client";
import React, { useEffect, useRef, useState } from "react";
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
import FilterDrop from "./FilterDrop";
import { User } from "@/lib/types";

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
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["fetchingUsers"],
    queryFn: () => fetchUsers(),
  });

  const [showFilter, setShowFilter] = useState<number | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const [dropdownUserId, setDropdownUserId] = useState<string | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerPage] = useState(7);
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Array.isArray(users)
    ? users.slice(itemOffset, endOffset)
    : [];

  const pageCount = Math.ceil(users?.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleDrop = (id: string) => {
    setDropdownUserId(dropdownUserId === id ? null : id);
  };

  const handleFilterDrop = (id: number) => {
    setShowFilter(showFilter === id ? null : id);
  };

  useEffect(() => {
    const hideFilter = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowFilter(null);
      }
    };

    document.addEventListener("click", hideFilter, true);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", hideFilter, true);
    };
  }, []);

  useEffect(() => {
    const hideOnClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setDropdownUserId(null);
      }
    };

    document.addEventListener("click", hideOnClickOutside, true);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

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
                  {tableHeaders?.map((header) => (
                    <th key={header?.id}>
                      <div className={styles.innerHeader}>
                        {header?.title}
                        <MdFilterList
                          size={20}
                          onClick={() => handleFilterDrop(header?.id)}
                          className={styles.fillIcon}
                        />
                      </div>
                      {showFilter === header?.id && (
                        <FilterDrop filterRef={filterRef} />
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users?.length > 0 ? (
                  currentItems?.map((user: User, index) => (
                    <tr key={user?._id} className={styles.tableBod}>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        {user?.organization}
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        {user?.personalInfo?.fullName}
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        {user?.personalInfo?.emailAddress}
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        {user?.personalInfo?.phoneNumber}
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        {user?.createdAt.slice(0, 10)}
                      </td>
                      <td
                        style={{
                          borderBottom:
                            index === currentItems.length - 1
                              ? "none"
                              : "1px solid #213f7d1a",
                        }}
                      >
                        <span
                          style={{
                            backgroundColor:
                              user?.status === "pending"
                                ? "rgba(233, 178, 0, 0.1)" // Yellow for pending
                                : user?.status === "blacklisted"
                                ? "rgba(228, 3, 59, 0.1)" // Red for blacklisted
                                : user?.status === "active"
                                ? "rgba(57, 205, 98, 0.06)" // Green for active
                                : user?.status === "inactive"
                                ? "rgba(84, 95, 125, 0.06)" // Gray for inactive
                                : "inherit",
                            color:
                              user?.status === "pending"
                                ? "#E9B200"
                                : user?.status === "blacklisted"
                                ? "#E4033B"
                                : user?.status === "active"
                                ? "#39CD62"
                                : user?.status === "inactive"
                                ? "#545F7D"
                                : "inherit",
                          }}
                          className={styles.userStatus}
                        >
                          {user?.status}
                        </span>
                      </td>
                      <td>
                        <FiMoreVertical
                          onClick={() => handleDrop(user?._id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                      {dropdownUserId === user?._id && (
                        <td className={styles.drop}>
                          <div ref={dropDownRef} className={styles.dropMain}>
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
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr className={styles.tableBod}>
                    <td>No Users!</td>
                  </tr>
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

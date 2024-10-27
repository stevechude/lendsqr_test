"use client";
import React from "react";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { IoMenuSharp } from "react-icons/io5";
import { LiaBell } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <IoMenuSharp size={25} />
        </div>
        <div>
          <Image src={"/lendsqr.svg"} width={120} height={20} alt="logo" />
        </div>
        {/* input */}
        <div className={styles.field}>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.in}
          />
          <div className={styles.searchIcon}>
            <IoIosSearch color="white" />
          </div>
        </div>
        {/* right */}
        <div className={styles.right}>
          <p className={styles.docs}>Docs</p>
          <LiaBell size={25} />
          <div className={styles.username}>
            <Image
              src={"/images/dash/avatar.png"}
              alt="Avatar"
              width={35}
              height={35}
            />
            <p>Adedeji</p>
            <GoTriangleDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

"use client";
import React from "react";
import styles from '../../styles/header.module.scss'
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return <section className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.menu}>
        <IoMenuSharp size={25} />
      </div>
      <div>
        <Image src={"/lendsqr.svg"} width={120} height={20} alt="logo" />
      </div>
      <div className={styles.username}>
        <p>Adedeji</p>
        <GoTriangleDown />
      </div>
    </div>
  </section>;
};

export default Header;

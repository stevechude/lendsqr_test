"use client";
import React, { useState } from "react";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import { GoTriangleDown } from "react-icons/go";
import { IoMenuSharp } from "react-icons/io5";
import { LiaBell } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import SideContent from "./SideContent";

const Header = () => {
  const [openMenu, setOpenmenu] = useState(false);

  return (
    <section
      // style={{ boxShadow: "0px 0px 5px -2px gray" }}
      className={styles.container}
    >
      <div className={styles.inner}>
        <button onClick={() => setOpenmenu(true)} className={styles.menu}>
          <IoMenuSharp size={25} />
        </button>
        <div>
          <Image src={"/lendsqr.svg"} width={120} height={20} alt="logo" />
        </div>
        {/* slide out */}
        {openMenu && (
          <div className={styles.openMenu}>
            <div className={styles.insideMenu}>
              <button
                onClick={() => setOpenmenu(false)}
                className={styles.backBtn}
              >
                <TiArrowBack color="#fff" size={25} />
              </button>

              {/* adedeji */}
              <div className={styles.adedeji}>
                <p className={styles.docs}>Docs</p>
                <LiaBell size={25} />
                <div className={styles.adedejiName}>
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

              <SideContent />
            </div>
          </div>
        )}
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

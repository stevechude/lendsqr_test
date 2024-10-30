"use client"
import React, { useEffect, useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import styles from '../../styles/userdetails.module.scss'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Placehold from "@/assets/Placehold";
import { FaRegStar, FaStar } from "react-icons/fa";
import { userDetailsTabs } from "@/lib/useful";
import GeneralDeets from "./GeneralDeets";

const UserDetails = () => {
  const [selectTab, setSelectTab] = useState("General Details")
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  const handleTabs = (tab: string) => {
    setSelectTab(tab)
  }

  useEffect(() => {
    console.log("Updated selectTab:", selectTab);
  }, [selectTab]);

  return <div className={styles.container}>
    <button onClick={goBack} className={styles.back}>
      <CgArrowLongLeft />
      <p>Back to Users</p>
    </button>

    <div className={styles.titleBtns}>
      <p className={styles.deets}>User Details</p>

      <div className={styles.btns}>
        <button className={styles.btnFirst}>Blacklist User</button>
        <button className={styles.btnSecnd}>Activate User</button>
      </div>
    </div>

    {/* mid */}
    <div className={styles.tabSection}>
      <div className={styles.tabsInner}>
        <div className={styles.tabsTop}>
          <div className={styles.photoContainer}>
            <Placehold />
          </div>
          <div className={styles.nameDiv}>
            <p className={styles.nameFirst}>Grace Effiom</p>
            <p className={styles.nameSec}>LSQFf587g90</p>
          </div>
          <div className={styles.starCont}>
            <div className={styles.nameStarDiv}>
              <p>User’s Tier</p>
              <span>
                <FaStar color="#E9B200" />
                <FaRegStar color="#E9B200" />
                <FaRegStar color="#E9B200" />
              </span>
            </div>
          </div>
          <div className={styles.balanceBank}>
            <p>₦200,000.00</p>
            <span>9912345678/Providus Bank</span>
          </div>
        </div>
        {/* bottom */}
        <div className={styles.actualTabs}>
          {
            userDetailsTabs?.map((tab, i) => (
              <button onClick={() => handleTabs(tab)} key={i} className={styles.tabContent}>
                <p style={{
                  color: selectTab === tab ? "#39CDCC" : "inherit"
                }}>{tab}</p>
                {
                  selectTab === tab && (
                    <hr style={{
                      backgroundColor: "#39CDCC",
                      height: "2px",
                      width: "8rem"
                    }} />
                  )
                }

              </button>
            ))
          }

        </div>
      </div>
    </div>

    {/* render tab data */}
    <div className={styles.tabDataContainer}>
      {
        selectTab === "General Details" && (
          <GeneralDeets />
        )
      }
    </div>
  </div>
};

export default UserDetails;

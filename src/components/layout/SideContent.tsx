"use client";
import React from "react";
import OrgIcon from "@/assets/OrgIcon";
import { FaAngleDown } from "react-icons/fa";
import DashIcon from "@/assets/DashIcon";
import { customersMenu } from "../sidebar/customers";
import { businessMenu } from "../sidebar/businesses";
import { settingsMenu } from "../sidebar/settings";
import styles from "../../styles/mobile-content.module.scss";
import Link from "next/link";

type Props = {
  onclick: () => void
}

const SideContent = ({ onclick }: Props) => {
  return (
    <>
      <div className={styles.barColumn}>
        {/* switch org */}
        <div className={styles.switch}>
          <OrgIcon />
          <p>Switch Organization</p>
          <FaAngleDown />
        </div>
        {/* dash */}
        <Link onClick={onclick} href={'/dashboard'} className={styles.dash}>
          <DashIcon />
          <p>Dashboard</p>
        </Link>

        {/* customers */}
        <div className={styles.customers}>
          <p className={styles.customP}>CUSTOMERS</p>
          {customersMenu?.map((dt) => (
            <Link onClick={onclick} href={`/${dt.path}`} key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </Link>
          ))}
        </div>
        {/* businesses */}
        <div className={styles.business}>
          <p className={styles.busP}>BUSINESSES</p>
          {businessMenu?.map((dt) => (
            <Link onClick={onclick} href={'#'} key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </Link>
          ))}
        </div>
        {/* settings */}
        <div className={styles.business}>
          <p className={styles.settP}>SETTINGS</p>
          {settingsMenu?.map((dt) => (
            <Link onClick={onclick} href={'#'} key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideContent;

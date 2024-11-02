"use client";
import React from "react";
import styles from "../../styles/sidebar.module.scss";
import { FaAngleDown } from "react-icons/fa";
import DashIcon from "@/assets/DashIcon";
import OrgIcon from "@/assets/OrgIcon";
import { customersMenu } from "../sidebar/customers";
import { businessMenu } from "../sidebar/businesses";
import { settingsMenu } from "../sidebar/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <div className={styles.barColumn}>
        {/* switch org */}
        <div className={styles.switch}>
          <OrgIcon />
          <p>Switch Organization</p>
          <FaAngleDown />
        </div>
        {/* dash */}
        <Link href={'/dashboard'} className={styles.dash}>
          <DashIcon />
          <p>Dashboard</p>
        </Link>

        {/* customers */}
        <div className={styles.customers}>
          <p className={styles.customP}>CUSTOMERS</p>
          {customersMenu?.map((dt) => (
            <div key={dt.id} className={pathname.includes(dt.path) ? styles.customersLink : ""}>
              <Link href={`/${dt.path}`}>
                {<dt.icon />}
                <p>{dt.name}</p>
              </Link>
            </div>
          ))}
        </div>
        {/* businesses */}
        <div className={styles.business}>
          <p className={styles.busP}>BUSINESSES</p>
          {businessMenu?.map((dt) => (
            <Link href={`#`} key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </Link>
          ))}
        </div>
        {/* settings */}
        <div className={styles.business}>
          <p className={styles.settP}>SETTINGS</p>
          {settingsMenu?.map((dt) => (
            <Link href={`#`} key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;

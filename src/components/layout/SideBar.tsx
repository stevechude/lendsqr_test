import React from "react";
import styles from "../../styles/sidebar.module.scss";
import { FaAngleDown } from "react-icons/fa";
import DashIcon from "@/assets/DashIcon";
import OrgIcon from "@/assets/OrgIcon";
import { customersMenu } from "../sidebar/customers";
import { businessMenu } from "../sidebar/businesses";

const SideBar = () => {
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
        <div className={styles.dash}>
          <DashIcon />
          <p>Dashboard</p>
        </div>

        {/* customers */}
        <div className={styles.customers}>
          <p>CUSTOMERS</p>
          {customersMenu?.map((dt) => (
            <div key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </div>
          ))}
        </div>
        {/* businesses */}
        <div className={styles.business}>
          <p>BUSINESSES</p>
          {businessMenu?.map((dt) => (
            <div key={dt.id}>
              {<dt.icon />}
              <p>{dt.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;

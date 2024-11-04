import React, { RefObject } from "react";
import styles from "../../styles/users.module.scss";

type Props = {
  filterRef: RefObject<HTMLDivElement>;
};

const FilterDrop = ({ filterRef }: Props) => {
  return (
    <>
      <div className={styles.filterStyle}>
        <div ref={filterRef} className={styles.filterInner}>
          <div>
            <label htmlFor="organization">Organization</label>
            <select id="organization" className={styles.filterField}>
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="User"
              className={styles.filterField}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="username"
              placeholder="Email"
              className={styles.filterField}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="username"
              placeholder="Date"
              className={styles.filterField}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className={styles.filterField}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" className={styles.filterField}>
              <option value="">Select</option>
            </select>
          </div>
          <span>
            <button className={styles.reset}>Reset</button>
            <button className={styles.filter}>Filter</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default FilterDrop;

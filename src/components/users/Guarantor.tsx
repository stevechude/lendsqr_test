"use client";
import React from "react";
import styles from "../../styles/guarantor.module.scss";

type GuarantorData = {
  emailAddress: string;
  fullName: string;
  phoneNumber: string;
  relationship: string;
};

type Props = {
  guarantor: GuarantorData;
};

const Guarantor = ({ guarantor }: Props) => {
  return (
    <>
      <div className={styles.top}>
        <p>Guarantor</p>
        <div className={styles.bot}>
          <div>
            <label htmlFor="">full Name</label>
            <span>{guarantor?.fullName}</span>
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <span>{guarantor?.phoneNumber}</span>
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <span>{guarantor?.emailAddress}</span>
          </div>
          <div>
            <label htmlFor="">Relationship</label>
            <span>{guarantor?.relationship}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guarantor;

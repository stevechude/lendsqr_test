"use client";
import React from "react";
import styles from "../../styles/eduem.module.scss";

type EducationInfo = {
  educationLevel: string;
  employmentStatus: string;
  sector: string;
  yearsOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
};

type Props = {
  education: EducationInfo;
};

const EduEm = ({ education }: Props) => {
  return (
    <>
      <div className={styles.top}>
        <p>Education and Employment</p>
        <div className={styles.bot}>
          <div>
            <label htmlFor="">level of education</label>
            <span>{education?.educationLevel}</span>
          </div>
          <div>
            <label htmlFor="">employment status</label>
            <span>Employed</span>
          </div>
          <div>
            <label htmlFor="">sector of employment</label>
            <span>FinTech</span>
          </div>
          <div>
            <label htmlFor="">Duration of employment</label>
            <span>2 years</span>
          </div>
          <div>
            <label htmlFor="">office email</label>
            <span>grace@lendsqr.com</span>
          </div>
          <div>
            <label htmlFor="">Monthly income</label>
            <span>₦200,000.00- ₦400,000.00</span>
          </div>
          <div>
            <label htmlFor="">loan repayment</label>
            <span>40,000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduEm;

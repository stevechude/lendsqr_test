"use client";
import React from "react";
import styles from "../../styles/socials.module.scss";

type SocialsData = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type Props = {
  socials: SocialsData;
};

const Socials = ({ socials }: Props) => {
  return (
    <>
      <div className={styles.top}>
        <p>Socials</p>
        <div className={styles.bot}>
          <div>
            <label htmlFor="">Twitter</label>
            <span>{socials?.twitter}</span>
          </div>
          <div>
            <label htmlFor="">Facebook</label>
            <span>{socials?.facebook}</span>
          </div>
          <div>
            <label htmlFor="">Instagram</label>
            <span>{socials?.instagram}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;

"use client";
import React from "react";
import styles from "../../styles/cards.module.scss";

type Props = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  amount: string;
};

const Cards = ({ title, icon: Icon, amount }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.iconContainer}>
          <Icon />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.amount}>{amount}</p>
      </div>
    </div>
  );
};

export default Cards;

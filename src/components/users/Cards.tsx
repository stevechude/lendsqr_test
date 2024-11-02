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
        <div
          style={{
            backgroundColor:
              title === "Users"
                ? "rgba(223, 24, 255, 0.1)"
                : title === "Active Users"
                ? "rgba(87, 24, 255, 0.1)"
                : title === "Users with Loans"
                ? "rgba(245, 95, 68, 0.1)"
                : title === "Users with Savings"
                ? "rgba(255, 51, 102, 0.1)"
                : "inherit",
          }}
          className={styles.iconContainer}
        >
          <Icon />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.amount}>{amount}</p>
      </div>
    </div>
  );
};

export default Cards;

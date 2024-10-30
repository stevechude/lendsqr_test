import React from "react";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import styles from "../../styles/layout.module.scss";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.side}>
        <SideBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

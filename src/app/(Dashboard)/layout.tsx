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
        <div className="p-2 lg:p-4 bg-[#ECECF1] overflow-x-auto overflow-y-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

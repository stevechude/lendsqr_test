"use client";
import React from "react";
import styles from "../../styles/general-details.module.scss";
import EduEm from "./EduEm";
import Socials from "./Socials";
import Guarantor from "./Guarantor";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/services/fetchUsers";
import { usePathname } from "next/navigation";

const GeneralDeets = () => {
  const path = usePathname();
  const id = path.substring(path.lastIndexOf("/") + 1);
  const { data: user, isLoading } = useQuery({
    queryKey: ["fetchingUsers"],
    queryFn: () => fetchUserById(id),
  });

  const personalInfo = user?.personalInfo;
  const education = user?.educationAndEmployment;
  const socials = user?.socials;
  const guarantor = user?.guarantor;
  //   console.log("user==", user?.guarantor);

  return (
    <div className={styles.container}>
      {/* first */}
      <div className={styles.gdfirst}>
        <p>Personal Information</p>
        <div className={styles.infoDiv}>
          <div>
            <label htmlFor="">full Name</label>
            <span>{personalInfo?.fullName}</span>
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <span>{personalInfo?.phoneNumber}</span>
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <span>{personalInfo?.emailAddress}</span>
          </div>
          <div>
            <label htmlFor="">Bvn</label>
            <span>{personalInfo?.bvn}</span>
          </div>
          <div>
            <label htmlFor="">Gender</label>
            <span>{personalInfo?.gender}</span>
          </div>
          <div>
            <label htmlFor="">Marital status</label>
            <span>{personalInfo?.maritalStatus}</span>
          </div>
          <div>
            <label htmlFor="">Children</label>
            <span>{personalInfo?.children}</span>
          </div>
          <div>
            <label htmlFor="">Type of residence</label>
            <span>{personalInfo?.residenceType}</span>
          </div>
        </div>
      </div>
      <hr />
      {/* second */}
      <EduEm education={education} />
      <hr />
      {/* third */}
      <Socials socials={socials} />
      <hr />
      {/* fourth */}
      <Guarantor guarantor={guarantor} />
    </div>
  );
};

export default GeneralDeets;

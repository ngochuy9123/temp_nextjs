import Image from "next/image";
import React from "react";
import styles from "@/app/User/styles/rightHome.module.scss";

interface UserProps {
  user: {
    name: string;
    profilePicture: string;
  };
}
const Contact = ({ user }: UserProps) => {
  return (
    <div className={`${styles.contact} hover3`}>
      <div className={styles.contact_img}>
        <Image src={user.profilePicture} alt="" width={36} height={36} />
      </div>
      <span>{user.name}</span>
    </div>
  );
};

export default Contact;

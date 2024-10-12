import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/User/styles/header.module.scss";

interface SettingPrivacyProps {
  setVisible: (visible: number) => void;
}

const SettingPrivacy = ({ setVisible }: SettingPrivacyProps) => {
  return (
    <div className={styles.absolute_wrap}>
      <div className={styles.absolute_wrap_header}>
        <div
          className={`${styles.circle} hover1`}
          onClick={() => {
            setVisible(0);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        Settings & privacy
      </div>
      <div className={`${styles.mmenu_item} hover3`}>
        <div className="small_circle">
          <FontAwesomeIcon icon={faCog} />
        </div>
        <span>Settings</span>
      </div>
    </div>
  );
};

export default SettingPrivacy;

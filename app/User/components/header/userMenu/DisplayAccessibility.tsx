import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
  faEnvelope,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/User/styles/header.module.scss";

interface SettingPrivacyProps {
  setVisible: (visible: number) => void;
}

const DisplayAccessibility = ({ setVisible }: SettingPrivacyProps) => {
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
        Help & Support
      </div>
      <div className={`${styles.mmenu_item} ${styles.hover3}`}>
        <div className="small_circle">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </div>
        <span>Help Center</span>
      </div>
      <div className={`${styles.mmenu_item} ${styles.hover3}`}>
        <div className="small_circle">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <span>Support Inbox</span>
      </div>
      <div className={`${styles.mmenu_item} ${styles.hover3}`}>
        <div className="small_circle">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <span>Report a Problem</span>
      </div>
    </div>
  );
};

export default DisplayAccessibility;

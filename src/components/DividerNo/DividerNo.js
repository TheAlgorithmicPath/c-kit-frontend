import React from "react";
import styles from "./DividerNo.module.css"; // Make sure to create a corresponding CSS file

const DividerNo = ({ activeButton, handleButtonClick }) => {
  return (
    <div className={`${styles["divider"]}`}>
      {[1, 2, 3].map((buttonNumber) => (
        <div
          key={buttonNumber}
          className={`${styles["circleButton"]} ${
            activeButton === buttonNumber ? styles.active : ""
          }`}
          onClick={() => handleButtonClick(buttonNumber)}
        >
          {buttonNumber}
        </div>
      ))}
    </div>
  );
};

export default DividerNo;

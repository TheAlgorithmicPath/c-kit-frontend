import React from "react";
import styles from "./BackToTop.module.css";
import up from "../../Assets/LandingV2/up.svg";

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${styles["btn-style"]}`} onClick={handleScrollToTop}>
      <p className={`${styles["vertical-reverse-text"]}`}>TO TOP</p>
      <img src={up} alt="" />
      
    </div>
  );
};

export default BackToTop;

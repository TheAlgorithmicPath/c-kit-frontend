import styles from "./Footer.module.css";
import IG from "../../Assets/Footer/IG.svg";
import FB  from  "../../Assets/Footer/FB.svg";
function Footer() {
  return (
    <footer className={`${styles["footer"]}`}>
    
    <div className={`${styles["social-icons"]}`}>
      <div className={`${styles["eclipse-instagram"]}`} > <img src={IG} alt="instagram-icon" /> </div>
      <div className={`${styles["eclipse-facebook"]}`} > <img src={FB} alt="facebook-icon" /> </div>
    </div>

    <div className={`${styles["text1"]}`}>
        <p>Copyright 2023 The Optimizers, Inc. All Rights Reserved </p>
    </div>

    <div   className={`${styles["text2"]}`}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Cookies Policy</p>
    </div>

    </footer>
    
  );

}

export default Footer;

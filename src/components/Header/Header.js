import styles from "./Header.module.css";
import Toggle from "../../Assets/Header/Toggle Switch Base.svg";
function Header() {
  return (
    <header className={`${styles["header"]}`}>
      <div className={`${styles["logo"]}`}>Brand-Name</div>

      <div className={`${styles["header-right"]}`}>
       <div> 
        <a  href="#Home"> Home</a>
        <div className={`${styles["active"]}`}></div>    
       </div> 
        
        <a href="#Benefits">Benefits</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Contact">Contact Us</a>
      </div>

      <div className={`${styles["cta"]}`}>
        <img src={Toggle} alt="dark-mode-toggle" />
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;

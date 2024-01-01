import styles from "./Star.module.css";

const Star = () => {
  return (
    <div className={`${styles["rating-Star"]}`}>
      <span className={`${styles["star"]} ${styles["active"]}`}></span>
      <span className={`${styles["star"]} ${styles["active"]}`}></span>
      <span className={`${styles["star"]} ${styles["active"]}`}></span>
      <span className={`${styles["star"]} ${styles["active"]}`}></span>
      <span className={`${styles["star"]}`}></span>
    </div>
  );
};

export default Star;

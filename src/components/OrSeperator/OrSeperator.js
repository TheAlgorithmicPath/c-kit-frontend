import styles from "./OrSeperator.module.css";
export default function OrSeperator() {
  return (
    <p className={`${styles["seprator"]} d-flex `}>
      <span className={styles["line"]}></span>
      Or
      <span className={styles["line"]}></span>
    </p>
  );
}

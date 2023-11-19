import styles from "./Button.module.css";
export default function Button({ children, ...props }) {
  return (
    <button className={`${styles["button"]} u-margin-top-small`} {...props}>
      {children}
    </button>
  );
}

import styles from "./RememberMe.module.css";
export default function RememberMe({ checked, setRememberMe }) {
  function checkHandler() {
    console.log(checked);
    setRememberMe((prev) => {
      return !prev;
    });
  }
  return (
    <div
      className={`${styles["remember"]} d-flex ${
        checked ? styles["checked"] : ""
      } `}
      onClick={checkHandler}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      <div></div>
      <p>Remember me</p>
    </div>
  );
}

import styles from "./Input.module.css";
import { useState, forwardRef } from "react";
export default forwardRef(function Input({ type, ...props }, ref) {
  const [showPassword, setShowPasswrod] = useState(false);

  return (
    <div className={`${styles["input"]} u-margin-top-small`}>
      {type !== "password" && <input type={type} {...props} ref={ref} />}

      {type === "password" && (
        <>
          <input type={showPassword ? "text" : type} {...props} ref={ref} />
          <button
            onClick={() => {
              setShowPasswrod((prev) => !prev);
            }}
          >
            show
          </button>
        </>
      )}
    </div>
  );
});

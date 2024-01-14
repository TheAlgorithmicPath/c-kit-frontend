import styles from "./DividerNo.module.css"

const DividerNo = ({ num }) => {
  return (
    <>
    <div className={`${styles["divider-no"]}`}>
    <div className={`${styles["outer-circle"]}`}>
      <div className={`${styles["inner-circle"]}`}>{num}</div>
      </div>
    </div>
      
   
    </>
  );
};

export default DividerNo;

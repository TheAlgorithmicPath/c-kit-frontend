import React, { useState } from 'react';
import styles from "./BarsV2.module.css";

export default function Bars(props) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>

    <article className={`${styles["bars"]} `}>
        <div className={`${styles["questionWrapper"]} `} >
          <p><span className={`${styles["Q"]} `}>Q.</span>{props.question}</p>
          <button onClick={toggleDetails}>+</button>
        </div>
    </article>
    <div>
    {showDetails && (
        <div className={`${styles["bar-content"]} `}>
          <p>{props.content}</p>
        </div>
      )}
      </div>  
      

    
    </>
  );
}

import { useState, useEffect } from "react";
import styles from "./RatingCircle.module.css";

const RatingCircle = () => {
  const [rating, setRating] = useState(4); // Example rating

  useEffect(() => {
    const circle = document.getElementById("ratingCircle");
    if (circle) {
      const circumference = 2 * Math.PI * circle.getAttribute("r");
      const percentage = (rating / 5) * 100;
      const dashArray = (circumference * percentage) / 100;
      const dashOffset = circumference - dashArray;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = dashOffset;
      circle.style.stroke = getFillColor(percentage); // Change the stroke color based on the percentage
    }
  }, [rating]);

  // Function to determine the fill color based on the percentage
  const getFillColor = (percentage) => {
    if (percentage >= 75) {
      return "#357960"; // Green for higher ratings
    } else if (percentage >= 50) {
      return "#FFC107"; // Yellow for mid-range ratings
    } else {
      return "#F44336"; // Red for lower ratings
    }
  };

  return (
    <>
      <div className={styles["rating-div"]}>
        <div className={styles["outer-circle"]}>
          <div className={styles["inner-circle"]}>
            <div className={styles["number"]}>{rating}/5</div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        // width="100px"
        // height="100px"
      >
        <circle
          id="ratingCircle"
          cx="150"
          cy="50" // Adjust the cy value to center the circle
          r="45"
          strokeLinecap="round"
          fill="none"
          strokeWidth="10" // Adjust the stroke width as needed
          stroke="gray" // Initial stroke color
          transform="rotate(-90 50 50)" // Rotate the circle to start from the top
        />
      </svg>
    </>
  );
};

export default RatingCircle;

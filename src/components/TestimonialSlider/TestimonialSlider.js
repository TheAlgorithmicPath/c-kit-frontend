import React, { useState } from "react";
import styles from "./TestimonialSlider.module.css"; // Add your own styles
import img from "../../Assets/LandingV2/sliderImg.svg";
import arrowRight from "../../Assets/LandingV2/arrowRight.svg";
import arrowLeft from "../../Assets/LandingV2/arrowLeft.svg";
import leftComma from "../../Assets/LandingV2/leftComma.svg";

const testimonialData = [
  {
    id: 1,
    name: "Radheshyam Sharma",
    text: "Thanks to [Mentor Finding Website], I found a super helpful mentor! The website is easy to use, and I got matched with someone who really understands my goals. It's like having a friendly guide on my journey. I totally recommend it!",
    image: img,
  },
  {
    id: 2,
    name: "John Doe",
    text: "Thanks to [Mentor Finding Website], Y found a super helpful mentor! The website is easy to use, and I got matched with someone who really understands my goals. It's like having a friendly guide on my journey. I totally recommend it!",
    image: img,
  },
  {
    id: 3,
    name: "Ramvati Tai",
    text: "Thanks to [Mentor Finding Website], I found a super helpful mentor! The website is easy to use, and I got matched with someone who really understands my goals. It's like having a friendly guide on my journey. I totally recommend it!",
    image: img,
  },
  {
    id: 4,
    name: "Mirza Khajuri",
    text: "Thanks to [Mentor Finding Website], I found a super helpful mentor! The website is easy to use, and I got matched with someone who really understands my goals. It's like having a friendly guide on my journey. I totally recommend it!",
    image: img,
  },
  // Add more testimonial objects as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${styles["testimonial-slider"]}`}>
      <div className={`${styles["slider-arrows"]}`}>
        <img onClick={handlePrev} src={arrowLeft} alt=""></img>
      </div>

      <div className={`${styles["testimonial"]}`}>
        <div className={`${styles["testimonial-left"]}`}>
          <img
            className={`${styles["testimonial-img"]}`}
            src={testimonialData[currentIndex].image}
            alt={`User ${currentIndex + 1}`}
          />
          <h3>{testimonialData[currentIndex].name}</h3>
        </div>

        <div className={`${styles["testimonial-content"]}`}>
          <img
            className={`${styles["left-comma"]}`}
            src={leftComma}
            alt=""
          ></img>
          <p>{testimonialData[currentIndex].text}</p>
          <img
            className={`${styles["right-comma"]}`}
            src={leftComma}
            alt=""
          ></img>
        </div>
      </div>

      <div className={`${styles["slider-arrows"]}`}>
        {/* Use handleNext for the right arrow */}
        <img onClick={handleNext} src={arrowRight} alt=""></img>
      </div>
    </div>
  );
};

export default TestimonialSlider;

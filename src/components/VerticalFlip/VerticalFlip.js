import React, { useState } from "react";
import styles from "./VerticalFlip.module.css"; // Make sure to create a corresponding CSS file
import DividerNo from "../DividerNo/DividerNo";
import img1 from "../../Assets/LandingV2/Verticalimg1.jpg";
import img2 from "../../Assets/LandingV2/Verticalimg2.jpg";
import img3 from "../../Assets/LandingV2/Verticalimg3.jpg";

const VerticalFlip = () => {
  const [activeButton, setActiveButton] = useState(2);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const buttonContent = [
    {
      imgSrc: img1,
      heading: "Something related to this image 1",
      paragraph:
        "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      imgSrc: img2,
      heading: "Something related to this image 2",
      paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis molestie eu, dictum est a, mattis tellus. Dignissim, nec fringilla metus accumsan, sem sollicitudin risus lacus, interdum elit tellus risus ut. Maecenas eget velit condimentum, sit amet lectus feugiat. Taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Auctor purus present luctus enim egestas, ante pulvinar ac scelerisque. Ut ex rhoncus donec. Ac rhoncus nisl, urna tempor eu. Vel bibendum lorem curabitur. Morbi convallis diam sit amet lacinia convallis. Elementum tellus in aliquam.",
    },
    {
      imgSrc: img3,
      heading: "Something related to this image 3",
      paragraph:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
  ];

  const currentContent = buttonContent[activeButton - 1];

  return (
    <section  className={`${styles["VerticalFlip"]}`} >
      <div className={`${styles["contentContainer"]}`}  >
        <div  className={`${styles["infoImg"]}`} >
          <img src={currentContent.imgSrc} alt="activeButtonImg" />
        </div>
        <DividerNo
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <div className={`${styles["infoContent"]}`}  >
          <h1 className={`${styles["mg"]}`} >{currentContent.heading}</h1>
          <p>{currentContent.paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default VerticalFlip;

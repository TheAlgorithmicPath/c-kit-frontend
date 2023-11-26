import React, { useState, useEffect }  from "react";
import styles from "./Landing.module.css";
import Benefit from "../../components/Benefit/Benefit";
import feature1 from "../../Assets/Landing page/Rectangle (2).svg";
import feature2 from "../../Assets/Landing page/search-engine-icon 1.svg";
import feature3 from "../../Assets/Landing page/Vector.svg";
import Panel from "../../components/Panel/Panel";
import round from "../../Assets/Landing page/Frame 65.svg";
import image1 from "../../Assets/Landing page/Frame 29.svg";
import image2 from "../../Assets/Landing page/Ellipse 2.png";
import image3 from "../../Assets/Landing page/“.svg";
import image4 from "../../Assets/Landing page/”.svg";
import image5 from "../../Assets/Landing page/Frame 28.svg";
// import image6 from "../../Assets/Landing page/Rectangle 15.svg";
import VideoBackground from "../../Assets/Landing page/Vid-Bg.svg";
import videoicon1 from "../../Assets/Landing page/icon _play_circle.svg";
import videoicon2 from "../../Assets/Landing page/Rectangle 18.svg";
import videoicon3 from "../../Assets/Landing page/Rectangle 17.svg";
import Bars from "../../components/Bars/Bars";



const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <article className={`${styles["landing"]}`}>
      <section className={`${styles["hero-section"]}`}>
        <div className={`${styles["hero-text"]} u-center-text`}>
          <h1>Help Hussle Learn</h1>
          <p>For Every Doubt Find Your Mentor</p>
          <button>Seach Now</button>
        </div>
      </section>
      <section className={`${styles["benefit-section"]}`}>
        <h2 className="u-center-text">Your Benefits</h2>
        <article className={`${styles["benefit-container"]}`}>
          <Benefit feature={"One on One session"} path={feature1} />
          <Benefit feature={"Search mentor to your needs"} path={feature2} />
          <Benefit feature={"Verified mentors"} path={feature3} />
        </article>
      </section>
      <section className={`${styles["social-figures"]}`}>
        <article className={`${styles["panel-container"]}`}>
          <Panel first={"123K"} second={"Mock Interviews"} />
          <Panel first={"789K"} second={"Active Users"} />
          <Panel first={"456K"} second={"Sessions Done"} />
        </article>
      </section>

      {/* <section className={`${styles["testimonial-section"]}`}>
        <article className={`${styles["testimonials"]}`}>
          <button>
            <img src={image1} alt="left-button"></img>
          </button>
          <div>
            <img src={image2} alt="profile pic"></img>
            <p>Radheshyam Sharma</p>
          </div>
          <p>
            Thanks to [Mentor Finding Website], I found a super helpful mentor!
            The website is easy to use, and I got matched with someone who
            really understands my goals. It's like having a friendly guide on my
            journey. I totally recommend it!
          </p>
          <button>
            <img src={image5} alt="right-button"></img>
          </button>
        </article>
      </section> */}
      <section classname={`${styles["testimonial-section"]}`}>
        <article className={`${styles["img-container"]}`}>
          <img src={round} alt="round background" />
        </article>
        <div className={`${styles["testimonial-container"]}`}>
          <article className={`${styles["testimonial-box"]}`}>
            <div>
              <img
                className={`${styles["left-arrow"]}`}
                src={image1}
                alt=" arrow"
              />
            </div>
            <div>
              <img
                className={`${styles["person"]}`}
                src={image2}
                alt=" arrow"
              />
              <p>Radheshyam Sharma</p>
            </div>
            <div>
              <img
                className={`${styles["comma"]}`}
                src={image3}
                alt="inverted comma"
              />
            </div>
            <div className={`${styles["info-textbox"]}`}>
              <p className={`${styles["info"]}`}>
                Thanks to[Mentor Finding Website], I found a super helpful
                mentor! The website is easy to use, and I got matched with
                someone who really understands my goals. It's like having a
                friendly guide on my journey. I totally recommend it!
              </p>
            </div>
            <div>
              <img
                className={`${styles["comma2"]}`}
                src={image4}
                alt="inverted comma close"
              />
            </div>
            <div>
              <img
                className={`${styles["right-arrow"]}`}
                src={image5}
                alt=" right-arrow"
              />
            </div>
          </article>
        </div>
        <article className={`${styles["below-testimonial"]}`}>
          <p className={`${styles["below-testimonial-text"]}`}>
            Elevate Your Journey with [Mentor Finding Website]
          </p>
        </article>
      </section>
      <section>
        <article className={`${styles["video"]}`}>
          <img
            className={`${styles["video-cutting"]}`}
            src={VideoBackground}
            alt=" video-demo"
          />
          <div className={`${styles["vidoe-icons"]}`}>
            <img
              className={`${styles["play-button"]}`}
              src={videoicon1}
              alt="video play-button"
            />
            <div className={`${styles["icon-seek"]}`}>
              <img
                className={`${styles["half"]}`}
                src={videoicon2}
                alt="demodemo"
              />
              <img
                className={`${styles["full"]}`}
                src={videoicon3}
                alt="demo"
              />
            </div>
          </div>
        </article>
      </section>

      <section className={`${styles["sectionFaq"]}`}>
        <article className={`${styles["faq"]}`}>
          <h2>FAQ</h2>
          <p>Have questions here you’ll find your answers</p>
          <section>
            <Bars
              content={
                "Lorem Ipsum is therefore always free from repetition, injected humour."
              }
            />
            <Bars
              content={
                "Lorem Ipsum is therefore always free from repetition, injected humour."
              }
            />
            <Bars
              content={
                "Lorem Ipsum is therefore always free from repetition, injected humour."
              }
            />
            <Bars
              content={
                "Lorem Ipsum is therefore always free from repetition, injected humour."
              }
            />
            <Bars
              content={
                "Lorem Ipsum is therefore always free from repetition, injected humour."
              }
            />
            <div className={`${styles["end"]}`}>
              {" "}
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary of over 200
                Latin words
              </p>
            </div>
          </section>
        </article>
      </section>
      <section className={`${styles["SectionFooter"]}`}>
        <article className={`${styles["last"]}`}>
          <div className={`${styles["footerText"]}`}>
            <p>Stuck Somewhere? Find your mentor today</p>
            <button>Create free account</button>
          </div>
        </article>
      </section>

      {/* <img
        className={`${styles["uparrow"]}`}
        src={uparrow}
        alt="round background uparrow"
      /> */}
      <button onClick={scrollToTop} className={`${styles.backToTop} ${isVisible ? styles.show : styles.hide}`}>
        &#8593;
      </button>
    </article>
  );
};

export default Landing;

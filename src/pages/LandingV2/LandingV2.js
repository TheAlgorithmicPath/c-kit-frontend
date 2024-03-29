import React from "react";
import { useState, useEffect } from "react";
import styles from "./LandingV2.module.css";
import BenefitV2 from "../../components/BenefitV2/BenefitV2";
import PanelV2 from "../../components/PanelV2/PanelV2";
import ReadCard from "../../components/ReadCard/ReadCard";
import senior from "../../Assets/LandingV2/senior 1.svg";
import BarsV2 from "../../components/BarsV2/BarsV2";
import laptopguy from "../../Assets/LandingV2/guy with laptop 1.svg";
import herosvg from "../../Assets/LandingV2/thehero.svg";
import TestimonialSlider from "../../components/TestimonialSlider/TestimonialSlider";
import Navbar from "../../components/Header/index";
import VerticalFlip from "../../components/VerticalFlip/VerticalFlip";

const LandingV2 = () => {
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
    <>
      <Navbar />
      <article className={`${styles["landing"]}`}>
        <section className={`${styles["hero"]}`}>
          <div className={`${styles["hero-text"]}`}>
            <h2 className={`${styles["mg"]} ${styles["heading2"]}`}>
              Long established fact that a reader readable content
            </h2>
            <p className={`${styles["mg"]} ${styles["heading3"]}`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <button>Get Started</button>
          </div>

          <img src={herosvg} alt=""></img>
        </section>

        <section className={`${styles["benefit"]}`}>
          <h1>Your Benefits</h1>
          <div className={`${styles["flexRow"]} ${styles["benefit-group"]}`}>
            <BenefitV2
              head={"Benefit Heading One "}
              para={
                "There are many variations of passages of Lorem Ipsum have suffered alteration."
              }
            />
            <BenefitV2
              head={"Benefit Heading Two "}
              para={
                "There are many variations of passages of Lorem Ipsum have suffered alteration."
              }
            />
            <BenefitV2
              head={"Benefit Heading Three "}
              para={
                "There are many variations of passages of Lorem Ipsum have suffered alteration."
              }
            />
          </div>
        </section>

        <VerticalFlip />

        <section className={`${styles["testimonial"]}`}>
          <TestimonialSlider />
        </section>

        <section className={`${styles["tag-line"]}`}>
          <h1>
            A
            <span className={`${styles["tag-line-span"]}`}>
              {" "}
              Platform Developed{" "}
            </span>{" "}
            <br />
            To Clear Your Doubts & Queries
          </h1>

          <p> Connect with your seniors and industry professionals</p>
          <button className={`${styles["btn"]} `}>Get Started For free</button>
        </section>
        <section className={`${styles["how-it-works-parent"]}`}>
          <h1>How It Works</h1>
          <div className={`${styles["how-it-works"]}`}>
            <div className={`${styles["how-it-works-1"]}`}>
              <h2>Long established fact that a reader readable content</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div className={`${styles["how-it-works-img"]}`}></div>
            </div>
            <div className={`${styles["how-it-works-2"]}`}>
              <h2>Long established fact that a reader readable content</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <div className={`${styles["how-it-works-img"]}`}></div>
            </div>

            <div className={`${styles["how-it-works-3"]}`}>
              <div>
                {" "}
                <h2>Long established fact that a reader readable content</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>

              <div className={`${styles["how-it-works-img"]}`}></div>
            </div>
            <div className={`${styles["how-it-works-vid"]}`}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jHv63Uvk5VA"
                frameborder="0"
                allowfullscreen
                title="youtube video "
              ></iframe>
            </div>
          </div>
        </section>

        <section className={`${styles["panel"]}`}>
          <PanelV2 first={"123K"} second={"Mock Interviews"} />
          <PanelV2 first={"789K"} second={"Active Users"} />
          <PanelV2 first={"456K"} second={"Sessions Done"} />
        </section>

        <section className={`${styles["tag-line-2"]}`}>
          <div className={`${styles["tag-line"]}`}>
            {" "}
            <h1>
              A Place For you <br />
              to{" "}
              <span className={`${styles["tag-line-span"]}`}>
                increase your{" "}
              </span>
              teaching skills
            </h1>
            <p> If you are good at something Try teaching it</p>
            <button className={`${styles["btn"]} `}>
              Get Started For free
            </button>
          </div>
        </section>

        <section className={`${styles["read"]}`}>
          <h3 className={`${styles["mg"]}`}>Why Teach?</h3>
          <h1 className={`${styles["mg"]} ${styles["read-heading"]}`}>
            Long established fact that a<br /> reader readable content
          </h1>
          <div className={`${styles["read-card-gp"]}`}>
            <ReadCard
              head={"Something related to this image"}
              para={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
              }
            />
            <ReadCard
              head={"Something related to this image"}
              para={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
              }
            />
            <ReadCard
              head={"Something related to this image"}
              para={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
              }
            />
            <ReadCard
              head={"Something related to this image"}
              para={
                "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
              }
            />
          </div>
          <img
            className={`${styles["senior-svg"]}`}
            src={senior}
            alt="girl"
          ></img>
        </section>

        <section className={`${styles["sectionFaq"]}`}>
          <article className={`${styles["faq"]}`}>
            <h2>FAQ</h2>
            <p>Have questions here you’ll find your answers</p>
            <section>
              <BarsV2
                question={
                  "Lorem Ipsum is therefore always free from repetition, injected humour."
                }
                content={
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"
                }
              />
              <BarsV2
                question={
                  "Lorem Ipsum is therefore always free from repetition, injected humour."
                }
                content={
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"
                }
              />
              <BarsV2
                question={
                  "Lorem Ipsum is therefore always free from repetition, injected humour."
                }
                content={
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"
                }
              />
              <BarsV2
                question={
                  "Lorem Ipsum is therefore always free from repetition, injected humour."
                }
                content={
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"
                }
              />
              <BarsV2
                question={
                  "Lorem Ipsum is therefore always free from repetition, injected humour."
                }
                content={
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words"
                }
              />
              <img src={laptopguy} alt=""></img>
            </section>
            <div
              onClick={scrollToTop}
              className={`${styles.backToTop} ${
                isVisible ? styles.show : styles.hide
              }`}
            >
              &#8593;
            </div>

            <section className={`${styles["bottom-section"]}`}>
              <div className={`${styles["bottom-section-Brand"]}`}>
                <h1>Brand-Name</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,{" "}
                </p>
                <div className={`${styles["img-row"]}`}>
                  <div className={`${styles["img-row-item"]}`}></div>
                  <div className={`${styles["img-row-item"]}`}></div>
                  <div className={`${styles["img-row-item"]}`}></div>
                  <div className={`${styles["img-row-item"]}`}></div>
                </div>
              </div>
              <div className={`${styles["bottom-section-form"]}`}>
                <form className={`${styles["form-grid"]}`}>
                  <input
                    className={`${styles["form-item-1"]}`}
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Email"
                  />
                  <div
                    className={`${styles["submit-btn"]} ${styles["form-item-2 "]}`}
                  >
                    SUBMIT
                  </div>

                  <textarea
                    className={`${styles["form-item-3"]}`}
                    placeholder="Write Query.."
                  ></textarea>
                </form>
              </div>
            </section>
            <section>
              <div className={`${styles["landing-footer"]}`}></div>
              <p className={`${styles["landing-footer-content"]}`}>
                Copyright 2023 The Optimizers, Inc. All Rights Reserved
              </p>
            </section>
          </article>
        </section>
      </article>
    </>
  );
};

export default LandingV2;

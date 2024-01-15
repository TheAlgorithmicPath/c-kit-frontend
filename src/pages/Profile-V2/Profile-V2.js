import styles from "./Profile-V2.module.css";
import { useRef,useState } from "react";
import SessionTableV2 from "../../components/SessionTableV2/SessionTableV2";
import ReviewContentV2 from "../../components/ReviewContentV2/ReviewContentV2";
import RatingCircle from "../../components/RatingCircle/RatingCircle";
import Figure from "../../components/Figure/Figure";
import Skill from "../../components/Skill/Skill";
import github from "../../Assets/Profile/icons8-github-104 1.png";
import linkedin from "../../Assets/Profile/icons8-linkedin-104 1.png";
import facebook from "../../Assets/Profile/icons8-fb-104 1.png";
import insta from "../../Assets/Profile/icons8-insta-104 1.png";
import twitter from "../../Assets/Profile/download 3.png";
import ProfilePic from "../../Assets/Profile/ProfilePic.png";


const ProfileV2 = () => {
  // const messageRef = useRef();
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.textContent);
  };
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      setClickedButton(null);
    }, 100); // Change back after 2 seconds (2000ms)
  };
  return (
    <article className={`${styles["profile-page2"]}`}>
      <section className={`${styles["profile-page-column1"]}`}>
        <div className={`${styles["info-card"]}`}>
          <div className={`${styles["profile-pic"]}`}>
            <img src={ProfilePic} alt="Profile"></img>

          </div>
          <div className={`${styles["info-card-content"]}`}>
            <div className={`${styles["basic-detail"]}`}>
              <div className={`${styles["basic-detail-name"]}`}>
                <h2>Mahila Jaivardhan</h2>
                <p>@mahilakijai</p>
                <br />
                <span>
                  B.Tech Mechanical Engineering 3rd Sem, 2nd Year Chandigarh
                  University
                </span>
              </div>
              <div className={`${styles["basic-detail-rating"]}`}>
                <RatingCircle />
              </div>
            </div>
            <div className={`${styles["figures"]}`}>
              <Figure first={"Sessions"} second={"20"} />
              <Figure first={"Followers"} second={"3.5k"} />
              <Figure first={"Following"} second={"512"} />
            </div>

            <div className={`${styles["unfollow-request-btn"]}`}>
              <button>Unfollow</button>
              <button> Session Request</button>
            </div>
            <div className={`${styles["bio"]}`}>
              <h1>Biography</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Excepteur sint
                occaecatupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es Sed ut perspiciatis unde omnis iste
                natus error sit
              </p>
            </div>
            <div className={`${styles["skill"]}`}>
              <h1>Skill</h1>
              <div className={`${styles["skill-tab"]}`}>
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
              </div>
            </div>
            <div className={`${styles["social"]}`}>
              <h1>Connect</h1>
              <div className={`${styles["social-container"]}`}>
                <img src={github} alt="github link"></img>
                <img src={linkedin} alt="linkedin link"></img>
                <img src={twitter} alt="twitter link"></img>
                <img src={facebook} alt="facebook link"></img>
                <img src={insta} alt="insta link"></img>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["connect-card"]}`}>
          <div className={`${styles["connect-header"]}`}>
            <h1>Connect</h1>
          </div>
         <div className={`${styles["connect-content"]} ${message ? styles['filled'] : ''}`}
            contentEditable
            onInput={handleInputChange}
          >
              {!message && <span className={styles['placeholder']}>Write your message here...</span>}
          </div>

          <button
            className={`${styles["connect-footer"]} ${
              clickedButton === 2 ? styles["clicked"] : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <h1>Send</h1>
          </button>
        </div>
      </section>

      <section className={`${styles["profile-page-column2"]}`}>
        <div className={`${styles["session-card"]}`}>
          <div className={`${styles["session-header"]}`}>
            <h1>Sessions</h1>
          </div>
          <div className={`${styles["session-table-section"]}`}>
            <SessionTableV2 />
          </div>
           <button
            className={`${styles["session-footer"]} ${
              clickedButton === 2 ? styles["clicked"] : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <h1>Show All</h1>
          </button>
        </div>

        <div className={`${styles["review-card"]}`}>
          <div className={`${styles["session-header"]}`}>
            <h1>Reveiws</h1>
          </div>

          <div className={`${styles["reveiwContent-section"]}`}>
            <ReviewContentV2 />
            <ReviewContentV2 />
            <ReviewContentV2 />
            
          </div>

          <button
            className={`${styles["session-footer"]} ${
              clickedButton === 3 ? styles["clicked"] : ""
            }`}
            onClick={() => handleButtonClick(3)}
          >
            <h1>Show All</h1>
          </button>
        </div>
      </section>
    </article>
  );
};

export default ProfileV2;

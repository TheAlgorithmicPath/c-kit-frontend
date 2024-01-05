import React from "react";
import  {useState } from "react";
import styles from "./Profile.module.css";
import pic from "../../Assets/Profile/ProfilePic.png";
import edit from "../../Assets/Profile/edit.png";
import Skill from "../../components/Skill/Skill";
import github from "../../Assets/Profile/icons8-github-104 1.png";
import linkedin from "../../Assets/Profile/icons8-linkedin-104 1.png";
import facebook from "../../Assets/Profile/icons8-fb-104 1.png";
import insta from "../../Assets/Profile/icons8-insta-104 1.png";
import edit2 from "../../Assets/Profile/edit2.svg";
import addProject from "../../Assets/Profile/addProject.svg";
import ProjectContent from "../../components/ProjectContent/ProjectContent";
import ratingRing from "../../Assets/Profile/ratingRing.svg";
import ratingRing2 from "../../Assets/Profile/ratingRing2.svg";
import ReviewContent from "../../components/ReviewContent/ReviewContent";
import SessionTable from "../../components/SessionTable/SessionTable";

const Profile = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      setClickedButton(null);
    }, 100); // Change back after 2 seconds (2000ms)
  };
  return (
    <article className={`${styles["profile-page"]}`}>
      <div className={`${styles["profile-page-div-1"]}`}>
        <section className={`${styles["profile-box"]}`}>
          <div className={`${styles["profile-image"]}`}>
            {/* <div className={`${styles["background-circle"]}`}>
              <img
                src={pic}
                className={`${styles["photo"]}`}
                alt="profile-pic"
              ></img>
              <img
                src={edit}
                className={`${styles["edit"]}`}
                alt="edit-button"
              ></img>
            </div>

            <div>
              <img
                src={edit2}
                className={`${styles["edit2"]}`}
                alt="ProfileContent-edit-button"
              ></img>
            </div> */}
          </div>

          <div className={`${styles["profile-box-content"]}`}>
            <div className={`${styles["username"]}`}>
              <span>Edit Username</span>
              <div className={`${styles["username-div"]}`}>Username@123</div>
            </div>

            <div className={`${styles["bio"]}`}>
              <span>Bio</span>
              <div className={`${styles["bio-div"]}`}>
                Tell about yourself...
              </div>
            </div>

            <div className={`${styles["college"]}`}>College</div>

            <div className={`${styles["two-columns"]}`}>
              <div className={`${styles["branch"]}`}>branch</div>
              <div className={`${styles["sem"]}`}>semester</div>
            </div>

            <div className={`${styles["skill"]}`}>
              <p>Skills</p>
              <div className={`${styles["skill-container"]}`}>
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
                <Skill content="UI/UX" />
              </div>
            </div>

            <div className={`${styles["connect"]}`}>
              <p>Connect</p>
              <div className={`${styles["social-container"]}`}>
                <img src={github} alt="github link"></img>
                <img src={linkedin} alt="linkedin link"></img>
                <img src={facebook} alt="facebook link"></img>
                <img src={insta} alt="insta link"></img>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["rating"]}`}>
          <div className={`${styles["rating-circle"]}`}>
            <img src={ratingRing} alt="rating-ring"></img>
            <img src={ratingRing2} alt="rating-ring-2"></img>
          </div>

          <p>4.0</p>
          <div className={`${styles["rating-Star"]}`}>
         
            <span className={`${styles["star"]} ${styles["active"]}`}></span>
            <span className={`${styles["star"]} ${styles["active"]}`}></span>
            <span className={`${styles["star"]} ${styles["active"]}`}></span>
            <span className={`${styles["star"]} ${styles["active"]}`}></span>
            <span className={`${styles["star"]}`}></span>
          </div>
        </section>

        <section className={`${styles["session"]}`}>
          <h1>23</h1>
          <p>Sessions</p>
          <p>Successfully Attended</p>
        </section>
      </div>

      <div className={`${styles["profile-page-div-2"]}`}>
        <section className={`${styles["project-section"]}`}>
          <div className={`${styles["project-header"]}`}>
            <h1>Projects</h1>
            <img src={addProject} alt="add-projet-icon"></img>
          </div>

          <div>
            <ProjectContent />
          </div>

          <button
          className={`${styles["project-footer"]} ${clickedButton === 1 ? styles["clicked"] : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          <h1>Show all</h1>
        </button>
        </section>

        <section className={`${styles["session-history"]}`}>
          <div className={`${styles["session-header"]}`}>
            <h1>Sessions</h1>
          </div>

          <SessionTable />
          <button
          className={`${styles["session-footer"]} ${clickedButton === 2 ? styles["clicked"] : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          <h1>Show all</h1>
        </button>
        </section>

        <section className={`${styles["review"]}`}>
          <div className={`${styles["review-header"]}`}>
            <h1>Reveiws</h1>
          </div>
          <ReviewContent />
          <button
         className={`${styles["session-footer"]} ${clickedButton === 3 ? styles["clicked"] : ''}`}
         onClick={() => handleButtonClick(3)}
        >
          <h1>Show all</h1>
        </button>
        </section>
      </div>
    </article>
  );
};

export default Profile;


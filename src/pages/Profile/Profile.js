import React from "react";
import styles from "./Profile.module.css";
import pic from "../../Assets/Profile/ProfilePic.png";
import edit from "../../Assets/Profile/edit.png";
import Skill from "../../components/Skill/Skill";
import github from "../../Assets/Profile/icons8-github-104 1.png";
import linkedin from "../../Assets/Profile/icons8-linkedin-104 1.png";
import facebook from "../../Assets/Profile/icons8-fb-104 1.png";
import insta from "../../Assets/Profile/icons8-insta-104 1.png";
import edit2 from "../../Assets/Profile/edit2.svg";

const Profile = () => {
  return (
    <article className={`${styles["profile-page"]}`}>
      <section className={`${styles["profile-box"]}`}>
        <div className={`${styles["profile-image"]}`}>
          <div className={`${styles["background-circle"]}`}>
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
          </div>
        </div>

        <div className={`${styles["profile-box-content"]}`}>
          <div className={`${styles["username"]}`}>
            <span>Edit Username</span>
            <div className={`${styles["username-div"]}`}>Username@123</div>
          </div>

          <div className={`${styles["bio"]}`}>
            <span>Bio</span>
            <div className={`${styles["bio-div"]}`}>Tell about yourself...</div>
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
      <section className={`${styles["project-section"]}`}></section>
    </article>
  );
};

export default Profile;

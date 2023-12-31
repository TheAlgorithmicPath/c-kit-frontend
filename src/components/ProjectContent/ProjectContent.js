import styles from "./ProjectContent.module.css";
import redirect from "../../Assets/Profile/redirect.png";
import calenderIcon from "../../Assets/Profile/calenderIcon.png";
import edit2 from "../../Assets/Profile/edit2.svg";
import Skill from "../Skill/Skill";
const ProjectContent = () => {
  return (
    <section div className={`${styles["project-content"]}`}>
      <div className={`${styles["project-content-header"]}`}>
        <div className={`${styles["project-content-header-left"]}`}>
          <h1>Project name</h1>
          <img src={redirect} alt="redirect-to-entire-project"></img>
        </div>

        <div className={`${styles["project-content-header-right"]}`}>
          <div className={`${styles["calender"]}`}>
            <img src={calenderIcon} alt="calender-icon"></img>
            <p>12/12/2000</p>
          </div>
          <img src={edit2} alt="edit-project-content"></img>
        </div>
      </div>
      <div className={`${styles["project-content-tech-stack"]}`}>
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
        <Skill content="UI/UX" />
      </div>
      <div className={`${styles["project-content-detail"]}`}>
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarasing hidden in the middle of text.There are
          many variations of passages of Lorem Ipsum have suffered alteration.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarasing hidden in the middle of text.There are
          many variations of passages of Lorem Ipsum have suffered alteration.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarasing hidden in the middle of text.There are
          many variations of passages of Lorem Ipsum have suffered alteration.
        </p>
      </div>
      <div className={`${styles["project-content-images"]}`}>
        <div className={`${styles["project-content-img"]}`}></div>
        <div className={`${styles["project-content-img"]}`}></div>
      </div>
      <div className={`${styles["project-content-github"]}`}></div>
    </section>
  );
};

export default ProjectContent;

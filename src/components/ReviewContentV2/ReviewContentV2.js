import styles from "./ReviewContentV2.module.css";
import reviewProfile from "../../Assets/Profile/ProfilePic.png";
import calenderIcon from "../../Assets/Profile/calenderIcon.png";
import Star from "../../components/Star/Star";
const ReviewContent = () => {
  return (
    <section className={`${styles["review-content"]}`}>
      <div className={`${styles["review-content-header"]}`}>
        <div className={`${styles["review-content-header-left"]}`}>
          <img src={reviewProfile} alt="review-profile-pic"></img>
          <div >
            <h1>FULL NAME</h1>
            <h3>Username</h3>
          </div>
        </div>

        <div className={`${styles["review-content-header-right"]}`}>
          <div className={`${styles["review-header-right-date"]}`}>
            <img src={calenderIcon} alt="calender-icon"></img>
            <p>12/12/2000</p>
          </div>
          <Star />
        </div>
      </div>
      <div className={`${styles["review-content-para"]}`}>
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarasing hidden in the middle of text.There are
          many variations of passages of Lorem Ipsum have suffered alteration.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarasing hidden.
        </p>
      </div>
    </section>
  );
};

export default ReviewContent;

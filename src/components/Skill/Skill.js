import styles from "./Skill.module.css";

export default function Skill(props) {
  return (
    <div className={`${styles["skill-tab"]}`}>
      <p>{props.content}</p>
    </div>
  );
}

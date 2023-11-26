import styles from "./Bars.module.css";
export default function Bars(props) {
  return (
    <article class={`${styles["bars"]} `}>
      <p> Q. </p>
      <p>{props.content}</p>
      <button>+</button>
    </article>
  );
}
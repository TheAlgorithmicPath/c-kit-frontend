import styles from "./Figure.module.css";
export default function Figure({ first, second })
 {
  return (
    <section class={`${styles["figure"]}`}>
      <div>
        <h3>{first}</h3>
      </div>
      <span>{second}</span>
    </section>
  );
}
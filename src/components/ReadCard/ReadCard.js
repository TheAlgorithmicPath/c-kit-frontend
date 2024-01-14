import styles from "./ReadCard.module.css";
export default function Panel({ head, para })
 {
  return (
    <section class={`${styles["read-card"]}`}>
      <div class={`${styles["read-card-header"]}`}>
        <div></div>
        <h2>{head}</h2>
      </div>
      <p>{para}</p>
    </section>
  );
}
import styles from "./PanelV2.module.css";
export default function Panel({ first, second })
 {
  return (
    <section class={`${styles["panel"]}`}>
      <div>
        <h2>{first}</h2>
      </div>
      <p>{second}</p>
    </section>
  );
}
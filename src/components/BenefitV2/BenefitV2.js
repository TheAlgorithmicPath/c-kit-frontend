import styles from "./BenefitV2.module.css";
export default function Benefit({ head, para }) {
  return (
    <section class={`${styles["benefit-card"]}`}>
      <div class={`${styles["benefit-card-header"]}`}>
        <div class={`${styles["img"]}`}></div>
        <div class={`${styles["heading"]}`}>{head}</div>
      </div>
      <p>{para}</p>
    </section>
  );
}

import styles from "./Benefit.module.css";
export default function Benefit({ path, feature })
 {
  return (
    <section class={`${styles["benefit"]}`}>
      <div>
        <img src={path} alt="benfit"></img>
      </div>
      <p>{feature}</p>
    </section>
  );
}

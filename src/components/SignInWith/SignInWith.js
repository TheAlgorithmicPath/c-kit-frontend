import styles from "./SignInWith.module.css";
export default function SignInWith(props) {
  return (
    <div className={`${styles["sign-in"]} d-flex u-margin-top-small`}>
      <div className={`${styles["sign-in-img"]} d-flex`}>
        <img src={props.path}></img>
      </div>
      <p>Sign in With {props.to}</p>
    </div>
  );
}

import { useRef, useState } from "react";
import styles from "./SignUp.module.css";
import SignUpsvg from "../../Assets/SignUp.svg";
import google from "../../Assets/Social/Google.png";
import facebook from "../../Assets/Social/Facebook.png";
import SignInWith from "../../components/SignInWith/SignInWith";
import OrSeperator from "../../components/OrSeperator/OrSeperator";
import Button from "../../components/Button/Button";
import UserInput from "../../components/UserInput/UserInput";
const SignUp = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  return (
    <article className={`${styles["SignUp"]} u-center-text  `}>
      <section>
        <img
          className={styles["SignUp-svg"]}
          src={SignUpsvg}
          alt="signup pic"
        ></img>
      </section>
      <section className={styles["SignUp-form"]}>
        <SignInWith to={"Google"} path={google} />
        <SignInWith to={"Facebook"} path={facebook} />
        <OrSeperator />

        <div>
          <UserInput placeholder="Name" type="text" ref={nameRef} />
          <UserInput placeholder="Email" type="text" ref={nameRef} />
          <UserInput placeholder="Password" type="password" ref={passwordRef} />
        </div>
        <Button type={"submit"}>Sign up</Button>
        <p className={`${styles["Have-account"]} u-center-text  `}>
          Already have an account?<a href="@"> login</a>
        </p>
        <p className={`${styles["Term-condition"]} u-center-text  `}>
          By signing you agreed to <a href="@"> our term & conditions </a>
        </p>
      </section>
    </article>
  );
};

export default SignUp;

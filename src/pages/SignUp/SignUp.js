import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  selectUser,
  signupUserAsync,
} from "../../redux/userSlice";

import google from "../../Assets/Social/Google.png";
import facebook from "../../Assets/Social/Facebook.png";
import SignSvg from "../../Assets/SignUp.svg";
import Input from "../../components/Input/Input";
import RememberMe from "../../components/RememberMe/RememberMe";
import styles from "./SignUp.module.css";
import OrSeperator from "../../components/OrSeperator/OrSeperator";
import Button from "../../components/Button/Button";
import SignInWith from "../../components/SignInWith/SignInWith";

export default function Signup() {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = {
      username: nameRef.current.value,
      // Additional signup data
    };

    dispatch(signupUserAsync(userData));
  };

  return (
    <article className={`${styles["SignUp"]} u-center-text  `}>
      <section className={styles["SignUp-svg"]}>
        <img src={SignSvg} alt="signup-pic"></img>
      </section>
      <section className={styles["SignUp-form"]}>
        <h1 className="">Create an Account</h1>
        <SignInWith to={"Google"} path={google} />
        <SignInWith to={"Facebook"} path={facebook} />
        <OrSeperator />
        <form onSubmit={handleSignup}>
          <div>
            <Input placeholder="Username or Email" type="text" ref={nameRef} />
            <Input placeholder="Password" type="password" ref={passwordRef} />
          </div>

          <div className={`${styles["SignUp-config"]} d-flex`}>
            <RememberMe checked={rememberMe} setRememberMe={setRememberMe} />
            <p>
              <a href="@">Forgot Password?</a>
            </p>
          </div>
          <Button type={"submit"} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <p>
          Already have an account?<a href="@"> Log in</a>
        </p>
      </section>
    </article>
  );
}

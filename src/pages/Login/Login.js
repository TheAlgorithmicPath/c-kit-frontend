import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserAsync } from "../../redux/userSlice"; // Updated import
import google from "../../Assets/Social/Google.png";
import facebook from "../../Assets/Social/Facebook.png";
import loginSvg from "../../Assets/LoginSvg.svg";
import Input from "../../components/Input/Input";
import RememberMe from "../../components/RememberMe/RememberMe";
import styles from "./Login.module.css";
import OrSeperator from "../../components/OrSeperator/OrSeperator";
import Button from "../../components/Button/Button";
import SignInWith from "../../components/SignInWith/SignInWith";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      username: nameRef.current.value,
      password: passwordRef.current.value, // Include password in user data
    };

    // Dispatch loginUserAsync instead of setUser
    dispatch(loginUserAsync(userData));
  };

  return (
    <article className={`${styles["login"]} u-center-text`}>
      <section className={styles["login-svg"]}>
        <img src={loginSvg} alt="login pic" />
      </section>
      <section className={styles["login-form"]}>
        <h1 className="">Welcome Back!!</h1>
        <SignInWith to={"Google"} path={google} />
        <SignInWith to={"Facebook"} path={facebook} />

        <OrSeperator />

        <form onSubmit={handleLogin}>
          <div>
            <Input placeholder="Username or Email" type="text" ref={nameRef} />
            <Input placeholder="Password" type="password" ref={passwordRef} />
          </div>

          <div className={`${styles["login-config"]} d-flex`}>
            <RememberMe checked={rememberMe} setRememberMe={setRememberMe} />
            <p>
              <a href="@">Forgot Password?</a>
            </p>
          </div>
          <Button type="submit">Log in</Button>
        </form>
        <p>
          Already have an account? <Link to="/SignUp">Create account</Link>
        </p>
      </section>
    </article>
  );
}

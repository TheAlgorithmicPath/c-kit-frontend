import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice.js";
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
    //API call
    const userData = {
      // Fetch user data from your authentication API or any other source
      // For now, let's assume a simple username
      username: nameRef.current.value,
    };
    dispatch(setUser(userData));
  };

  return (
    <article className={`${styles["login"]} u-center-text  `}>
      <section className={styles["login-svg"]}>
        <img src={loginSvg} alt="login pic"></img>
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
          <Button type={"submit"}>Log in</Button>
        </form>
        <p>
          Don't have an account?<a href="@"> Create account</a>
        </p>
      </section>
    </article>
  );
}

// import { useRef, useState } from "react";

// import google from "../../Assets/Social/Google.png";
// import facebook from "../../Assets/Social/Facebook.png";
// import loginSvg from "../../Assets/LoginSvg.svg";
// import Input from "../../components/Input/Input";
// import RememberMe from "../../components/RememberMe/RememberMe";
// import styles from "./Login.module.css";
// import OrSeperator from "../../components/OrSeperator/OrSeperator";
// import Button from "../../components/Button/Button";
// import SignInWith from "../../components/SignInWith/SignInWith";
// export default function Login() {
//   const [rememberMe, setRememberMe] = useState(false);

//   const nameRef = useRef();
//   const passwordRef = useRef();
//   return (
//     <article className={`${styles["login"]} u-center-text  `}>
//       <section className={styles["login-svg"]}>
//         <img src={loginSvg} alt="login pic"></img>
//       </section>
//       <section className={styles["login-form"]}>
//         <h1 className="">Welcome Back!!</h1>
//         <SignInWith to={"Google"} path={google} />
//         <SignInWith to={"Facebook"} path={facebook} />
//         <OrSeperator />
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <div>
//             <Input placeholder="Username or Email" type="text" ref={nameRef} />
//             <Input placeholder="Password" type="password" ref={passwordRef} />
//           </div>

//           <div className={`${styles["login-config"]} d-flex`}>
//             <RememberMe checked={rememberMe} setRememberMe={setRememberMe} />
//             <p>
//               <a href="@">Forgot Password?</a>
//             </p>
//           </div>
//           <Button type={"submit"}>Log in</Button>
//         </form>
//         <p>
//           Don't have an account?<a href="@"> Create account</a>
//         </p>
//       </section>
//     </article>
//   );
// }

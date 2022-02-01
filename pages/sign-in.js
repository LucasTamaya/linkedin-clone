import styles from "../styles/SignIn.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const SignIn = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [btnPassword, setBtnPassword] = useState("show");
  const input = useRef();

  //   fonction qui permet de masquer ou de révéler le mot de passe lorsqu'on le tape dans le formulaire
  const showOrHiddenPwd = () => {
    if (viewPassword) {
      input.current.type = "text";
      setBtnPassword("hidden");
    } else {
      input.current.type = "password";
      setBtnPassword("show");
    }
  };

  //   à chaque fois viewPassword change, j'appelle la fonction showOrHiddenPwd
  useEffect(() => {
    showOrHiddenPwd();
  }, [viewPassword]);

  return (
    <main className={styles.signIn}>
      <img
        src="/logo-with-text.svg"
        alt="linkedin text logo"
        className={styles.signIn__header__img}
      />
      <div className={styles.signIn__text__and__form}>
        <h1 className={styles.signIn__header__h1}>Sign in</h1>
        <p className={styles.signIn__header__para}>
          Stay updated on your professional world
        </p>
        <form className={styles.signIn__form}>
          <div className={styles.signIn__form__input__container}>
            <input
              type="email"
              placeholder="Email or Phone"
              className={styles.signIn__form__input}
            />
          </div>
          <div className={styles.signIn__form__input__container}>
            <input
              ref={input}
              type="password"
              placeholder="Password"
              className={styles.signIn__form__input}
            />
            <button
              type="button"
              className={styles.signIn__form__pwd__btn}
              onClick={() => setViewPassword(!viewPassword)}
            >
              {btnPassword}
            </button>
          </div>
          <p className={styles.signIn__form__para}>Forgot your password ?</p>
          <button type="submit" className={styles.signIn__form__btn}>
            Sign in
          </button>
        </form>
        <p className={styles.signIn__register__link}>
          New to Linkedin? <Link href="/register">Join now</Link>
        </p>
      </div>
    </main>
  );
};

export default SignIn;

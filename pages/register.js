import styles from "../styles/Register.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
const axios = require("axios");

const Register = () => {
  // variable afin de récupérer les données de l'utilisateur
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // envoit la data à notre API
  const sendData = () => {
    axios.post("http://localhost:3000/api/auth/register", {
      email: email,
      name: name,
      password: password,
    });
  };

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
    <main className={styles.register}>
      <img
        src="/logo-with-text.svg"
        alt="linkedin text logo"
        className={styles.register__header__img}
      />
      <div className={styles.register__text__and__form}>
        <h1 className={styles.register__header__h1}>
          Join Linkedin now it's free!
        </h1>
        <form className={styles.register__form}>
          <div className={styles.register__form__input__container}>
            <input
              type="email"
              placeholder="Email or Phone"
              className={styles.register__form__input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.register__form__input__container}>
            <input
              type="text"
              placeholder="Name"
              className={styles.register__form__input}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.register__form__input__container}>
            <input
              ref={input}
              type="password"
              placeholder="Password (6 or more characters)"
              className={styles.register__form__input}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.register__form__pwd__btn}
              onClick={() => setViewPassword(!viewPassword)}
            >
              {btnPassword}
            </button>
          </div>
          <button
            type="submit"
            className={styles.register__form__btn}
            onClick={sendData}
          >
            Continue
          </button>
        </form>
        <p className={styles.register__login__link}>
          Already on Linkedin? <Link href="/sign-in">Sign in</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;

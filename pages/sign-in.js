import styles from "../styles/SignIn.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form"; //librairie afin de faciliter la mise en place de formulaire
import * as Yup from "yup"; //librairie afin de faciliter la gestion d'erreur des champs de mon formulaire
import { yupResolver } from "@hookform/resolvers/yup"; //nécessaire afin d'utiliser "react-hook-form" et "yup" ensemble
const axios = require("axios");

const SignIn = () => {
  const router = useRouter();
  // affiche une erreur, soit l'email n'existe pas, soit le mot de passe n'est pas valide
  const [logError, setLogError] = useState("");

  // affiche un message pour informer l'utilisateur que la connexion a réussit
  const [logSuccess, setLogSuccess] = useState("");

  // schema de validation de notre formulaire avec gestion d'erreurs inclus
  // en gros on stipule ici ce qu'on veut recevoir comme data de la part de l'utilisateur, et si il ne respecte pas les règles misent en place, on triger les messages d'erreur entre ()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("You must enter a valid email address") //message d'erreur si l'email n'est pas valide
      .required("You must enter your email address"), //message d'erreur si on ne remplit pas le champ email
    password: Yup.string()
      .min(6, "This password is too short") //message d'erreur si le password fait moins de 6 caractères
      .required("You must enter a password"), //message d'erreur si on ne remplit pas le champ password
  }).required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), //on indique à react-hook-form d'utiliser notre validationSchema afin de traiter les erreurs
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/api/auth/sign-in", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        // si connexion réussi, on informe l'utilisateur et on l'envoit vers le dashboard
        if (res.data.msg === "log") {
          setLogSuccess("Successful connection");
          router.push("/dashboard");
          // si l'email n'existe pas, on informe l'utilisateur
        } else if (res.data.msg === "email not found") {
          setLogError("This email doesn't exists");
          // si le mot de passe n'est pas bon, on informe l'utilisateur
        } else {
          setLogError("Invalid password");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const [viewPassword, setViewPassword] = useState(false);
  const [btnPassword, setBtnPassword] = useState("show");

  //   fonction qui permet de masquer ou de révéler le mot de passe lorsqu'on le tape dans le formulaire
  const showOrHiddenPwd = () => {
    setViewPassword(!viewPassword);
    if (viewPassword) {
      document.getElementById("signIn__pwd").type = "text";
      setBtnPassword("hidden");
    } else {
      document.getElementById("signIn__pwd").type = "password";
      setBtnPassword("show");
    }
  };

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
        <form
          className={styles.signIn__form}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={value || ""}
                  className={
                    !!error
                      ? `${styles.signIn__form__input} ${styles.error}`
                      : styles.signIn__form__input
                  }
                  onChange={onChange}
                />
                {/* si il y a une erreur dans le champs, on affiche le message correspondant à l'erreur */}
                {!!error && (
                  <p className={styles.signIn__form__error__msg}>
                    {error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <div
                  className={
                    !!error
                      ? `${styles.signIn__form__input__pwd__container} ${styles.error}`
                      : styles.signIn__form__input__pwd__container
                  }
                >
                  <input
                    id="signIn__pwd"
                    type="password"
                    placeholder="Password"
                    value={value || ""}
                    className={styles.signIn__form__input__pwd}
                    onChange={onChange}
                  />
                  <button
                    type="button"
                    className={styles.signIn__form__pwd__btn}
                    onClick={showOrHiddenPwd}
                  >
                    {btnPassword}
                  </button>
                </div>
                {!!error && (
                  <p className={styles.signIn__form__error__msg}>
                    {error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <p className={styles.signIn__form__para}>Forgot your password ?</p>
          <button type="submit" className={styles.signIn__form__btn}>
            Sign in
          </button>
        </form>
        <p className={styles.signIn__register__link}>
          New to Linkedin? <Link href="/register">Join now</Link>
        </p>
      </div>
      {logError != "" && (
        <div className={styles.logError}>
          <p className={styles.logError__para}>{logError}</p>
        </div>
      )}

      {logSuccess != "" && (
        <div className={styles.logSuccess}>
          <p className={styles.logSuccess__para}>{logSuccess}</p>
        </div>
      )}
    </main>
  );
};

export default SignIn;

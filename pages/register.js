import styles from "../styles/Register.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form"; //librairie afin de faciliter la mise en place de formulaire
import * as Yup from "yup"; //librairie afin de faciliter la gestion d'erreur des champs de mon formulaire
import { yupResolver } from "@hookform/resolvers/yup"; //nécessaire afin d'utiliser "react-hook-form" et "yup" ensemble
const axios = require("axios");
const template = require("../helpers/template");

const Register = () => {
  // va me permettre de rediriger l'utilisateur vers le dashboard après son inscription
  const router = useRouter();

  // schema de validation de notre formulaire avec gestion d'erreurs inclus
  // en gros on stipule ici ce qu'on veut recevoir comme data de la part de l'utilisateur, et si il ne respecte pas les règles misent en place, on triger les messages d'erreur entre ()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("You must enter a valid email address") //message d'erreur si l'email n'est pas valide
      .required("You must enter your email address"), //message d'erreur si on ne remplit pas le champ email
    name: Yup.string().required("You must enter your name"), //message d'erreur si on ne remplit pas le champ name
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
  // envoit la data à notre API
  const onSubmitForm = (data) => {
    axios
      .post("https://linkedin-clone-lucastamaya.vercel.app/api/auth/register", {
        email: data.email,
        name: data.name,
        password: data.password,
      })
      // si l'utilisateur a bien été enregistrer
      .then((res) => {
        if (res.data.status === 200) {
          // on stocke son nom et son adresse mail dans le localStorage afin de l'afficher dans son dashboard
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.name);
          // et on l'envoit vers le dashboard
          router.push("/dashboard");
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
      document.getElementById("register__pwd").type = "text";
      setBtnPassword("hidden");
    } else {
      document.getElementById("register__pwd").type = "password";
      setBtnPassword("show");
    }
  };

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
        <form
          className={styles.register__form}
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
                      ? `${styles.register__form__input} ${styles.error}`
                      : styles.register__form__input
                  }
                  onChange={onChange}
                />
                {!!error && (
                  <p className={styles.register__form__error__msg}>
                    {error?.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={value || ""}
                  className={
                    !!error
                      ? `${styles.register__form__input} ${styles.error}`
                      : styles.register__form__input
                  }
                  onChange={onChange}
                />
                {!!error && (
                  <p className={styles.register__form__error__msg}>
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
                      ? `${styles.register__form__input__pwd__container} ${styles.error}`
                      : styles.register__form__input__pwd__container
                  }
                >
                  <input
                    id="register__pwd"
                    type="password"
                    placeholder="Password"
                    value={value || ""}
                    className={styles.register__form__input__pwd}
                    onChange={onChange}
                  />
                  <button
                    type="button"
                    className={styles.register__form__pwd__btn}
                    onClick={showOrHiddenPwd}
                  >
                    {btnPassword}
                  </button>
                </div>
                {!!error && (
                  <p className={styles.register__form__error__msg}>
                    {error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <button type="submit" className={styles.register__form__btn}>
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

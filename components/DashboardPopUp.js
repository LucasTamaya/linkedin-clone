import styles from "../styles/Dashboard/DashboardPopUp.module.css";
import FaceIcon from "@mui/icons-material/Face";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, useForm } from "react-hook-form"; //librairie afin de faciliter la mise en place de formulaire
import * as Yup from "yup"; //librairie afin de faciliter la gestion d'erreur des champs de mon formulaire
import { yupResolver } from "@hookform/resolvers/yup"; //nécessaire afin d'utiliser "react-hook-form" et "yup" ensemble
import { useState, useEffect } from "react";
const template = require("../util/template");
const axios = require("axios");

const DashboardPopUp = ({ lightMode, closePopUp, refreshData }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const validationSchema = Yup.object({
    message: Yup.string().required("Enter a message first"), //message d'erreur si on ne remplit pas le champ message
  }).required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), //on indique à react-hook-form d'utiliser notre validationSchema afin de traiter les erreurs
  });

  const onSubmitForm = async (data) => {
    const res = await axios.post(`${template}api/posts/add`, {
      message: data.message,
      name: name,
      email: email,
    });
    if (res.status === 200) {
      closePopUp(); //ferme la pop up
      refreshData(); //rafraîchit la liste des posts automatiquement sans avoir besoin de recharger totalement la page
      document.getElementById("textarea").value = "";
    } else {
      console.log("erreur dans l'ajout du nouveau post");
    }
  };

  return (
    <div
      className={
        lightMode
          ? `${styles.popUpContainer}`
          : `${styles.popUpContainer} ${styles.dark}`
      }
    >
      <div
        className={
          lightMode ? `${styles.popUp}` : `${styles.popUp} ${styles.dark}`
        }
      >
        <div className={styles.popUp__top}>
          <h2
            className={
              lightMode
                ? `${styles.popUp__top__h2}`
                : `${styles.popUp__top__h2} ${styles.dark}`
            }
          >
            Create a post
          </h2>
          <CloseIcon className={styles.popUp__top__icon} onClick={closePopUp} />
        </div>
        <div className={styles.popUp__user}>
          <FaceIcon
            className={
              lightMode
                ? `${styles.post__icon}`
                : `${styles.post__icon} ${styles.dark}`
            }
          />
          <p
            className={
              lightMode
                ? `${styles.popUp__user__name}`
                : `${styles.popUp__user__name} ${styles.dark}`
            }
          >
            {name} {/* insère le nom stocké dans le local storage */}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className={styles.popUp_form}
        >
          <Controller
            control={control}
            name="message"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div className={styles.popUp__inputContainer}>
                <textarea
                  id="textarea"
                  type="text"
                  placeholder="What do you want to talk about"
                  value={value || ""}
                  className={
                    lightMode
                      ? `${styles.popUp__input}`
                      : `${styles.popUp__input} ${styles.dark}`
                  }
                  onChange={onChange}
                ></textarea>
                {!!error && (
                  <p className={styles.popUp__input__error__msg}>
                    {error?.message}
                  </p>
                )}
                <button
                  className={
                    lightMode
                      ? `${styles.popUp__bottom__btn}`
                      : `${styles.popUp__bottom__btn} ${styles.dark}`
                  }
                >
                  Post
                </button>
              </div>
            )}
          />
        </form>
      </div>
    </div>
  );
};

export default DashboardPopUp;

import styles from "../styles/Dashboard/DashboardPopUp.module.css";
import FaceIcon from "@mui/icons-material/Face";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form"; //librairie afin de faciliter la mise en place de formulaire
import * as Yup from "yup"; //librairie afin de faciliter la gestion d'erreur des champs de mon formulaire
import { yupResolver } from "@hookform/resolvers/yup"; //nécessaire afin d'utiliser "react-hook-form" et "yup" ensemble
const axios = require("axios");

const DashboardPopUp = ({ lightMode, closePopUp }) => {
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

  const onSubmitForm = (data) => {
    console.log(data);
    axios.post("http://localhost:3000/api/posts/add", {
      message: data.message,
    });
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
            Lucas T
          </p>{" "}
          {/* récupérer celui depuis le login */}
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Controller
            control={control}
            name="message"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <textarea
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
              </div>
            )}
          />
          <div className={styles.popUp__bottom}>
            <input
              type="text"
              placeholder="Add a photo URL (optional)"
              className={
                lightMode
                  ? `${styles.popUp__bottom__input}`
                  : `${styles.popUp__bottom__input} ${styles.dark}`
              }
            />
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
        </form>
      </div>
    </div>
  );
};

export default DashboardPopUp;

/*
<Controller
            control={control}
            name="message"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div>
                <textarea
                  type="text"
                  placeholder="Email or Phone"
                  value={value || ""}
                  className={
                lightMode
                  ? `${styles.popUp__input__error}`
                !!error ? `${popUp}`
                  : `${styles.popUp__input__error} ${styles.dark}`
              }
                  onChange={onChange}
                ></textarea>
                {!!error && (
                  <p className={styles.popUp__input__error__msg}>
                    {error?.message}
                  </p>
                )}
              </div>
            )}
          />
*/

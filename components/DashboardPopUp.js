import styles from "../styles/Dashboard/DashboardPopUp.module.css";
import FaceIcon from "@mui/icons-material/Face";
import CloseIcon from "@mui/icons-material/Close";

const DashboardPopUp = ({ lightMode, closePopUp }) => {
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
        <form>
          <textarea
            placeholder="What do you want to talk about"
            className={
              lightMode
                ? `${styles.popUp__input}`
                : `${styles.popUp__input} ${styles.dark}`
            }
          ></textarea>
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

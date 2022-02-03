import styles from "../styles/Dashboard/DashboardUser.module.css";
import FaceIcon from "@mui/icons-material/Face";

const DashboardUser = ({lightMode}) => {
  return (
    <div
      className={
        lightMode ? `${styles.userCard}` : `${styles.userCard} ${styles.dark}`
      }
    >
      <FaceIcon
        className={
          lightMode
            ? `${styles.userCard__icon}`
            : `${styles.userCard__icon} ${styles.dark}`
        }
      />

      <div className={styles.userCard__contactContainer}>
        <p
          className={
            lightMode
              ? `${styles.userCard__contactContainer__name}`
              : `${styles.userCard__contactContainer__name} ${styles.dark}`
          }
        >
          Lucas T
        </p>{" "}
        {/*Récupérer le nom entré lors du login / register*/}
        <p className={styles.userCard__contactContainer__email}>
          lucas.tamaya@orange.fr
        </p>{" "}
        {/*Récupérer le mail entré lors du login / register*/}
      </div>
    </div>
  );
};

export default DashboardUser;

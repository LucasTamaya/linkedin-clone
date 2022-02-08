import styles from "../styles/Dashboard/DashboardSidebar.module.css";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";
import Image from 'next/image';

const DashboardSidebar = ({ lightMode }) => {
  return (
    <div
      className={
        lightMode ? `${styles.sidebar}` : `${styles.sidebar} ${styles.dark}`
      }
    >
      <div
        className={
          lightMode ? `${styles.news}` : `${styles.news} ${styles.dark}`
        }
      >
        <div className={styles.news__top}>
          <h2
            className={
              lightMode
                ? `${styles.news__top__h2}`
                : `${styles.news__top__h2} ${styles.dark}`
            }
          >
            Linkedin News
          </h2>
          <InfoIcon
            className={
              lightMode
                ? `${styles.news__top__icon}`
                : `${styles.news__top__icon} ${styles.dark}`
            }
          />
        </div>
        <div className={styles.news__items}>
          <div className={styles.news__items__title}>
            <CircleIcon
              className={
                lightMode
                  ? `${styles.news__items__title__icon}`
                  : `${styles.news__items__title__icon} ${styles.dark}`
              }
            />
            <p
              className={
                lightMode
                  ? `${styles.news__items__title__para}`
                  : `${styles.news__items__title__para} ${styles.dark}`
              }
            >
              Voila une superbe news !
            </p>
          </div>
          <p className={styles.news__items__time}>Il y a 14 minutes</p>
        </div>
      </div>

      <Image
        src="/Dashboard-Promo-Image.jpg"
        alt="dashboard promo image"
        className={styles.sidebar__img}
        width='300px' height='300px'
      />
    </div>
  );
};

export default DashboardSidebar;

import styles from "../styles/Dashboard/DashboardUser.module.css";
import FaceIcon from "@mui/icons-material/Face";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useState, useEffect } from "react";

const DashboardUser = ({ lightMode }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  });

  return (
    <div className={styles.dashboardLeft}>
      <div
        className={
          lightMode ? `${styles.userCard}` : `${styles.userCard} ${styles.dark}`
        }
      >
        <div
          className={
            lightMode
              ? `${styles.userCard__contact}`
              : `${styles.userCard__contact} ${styles.dark}`
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
              {name} {/*insère le nom stocké dans le local storage*/}
            </p>
            <p className={styles.userCard__contactContainer__email}>
              {email} {/*insère le mail stocké dans le local storage*/}
            </p>
          </div>
        </div>

        <div className={styles.separationLine}></div>

        <div className={styles.userCard__views}>
          <div className={styles.userCard__viewsContainer}>
            <h3
              className={
                lightMode
                  ? `${styles.userCard__viewsContainer__h3}`
                  : `${styles.userCard__viewsContainer__h3} ${styles.dark}`
              }
            >
              Who viewed your profile
            </h3>
            <p className={styles.userCard__viewsContainer__number}>16</p>
          </div>
          <div className={styles.userCard__viewsContainer}>
            <h3
              className={
                lightMode
                  ? `${styles.userCard__viewsContainer__h3}`
                  : `${styles.userCard__viewsContainer__h3} ${styles.dark}`
              }
            >
              Views of your posts
            </h3>
            <p className={styles.userCard__viewsContainer__number}>100</p>
          </div>
        </div>

        <div className={styles.separationLine}></div>

        <div className={styles.userCard__premium}>
          <p
            className={
              lightMode
                ? `${styles.userCard__premium__para}`
                : `${styles.userCard__premium__para} ${styles.dark}`
            }
          >
            {" "}
            Access exclusive tools and insights
          </p>
          <div className={styles.userCard__premiumContainer}>
            <WorkspacePremiumIcon
              className={styles.userCard__premiumContainer__icon}
            />
            <h3
              className={
                lightMode
                  ? `${styles.userCard__premiumContainer__h3}`
                  : `${styles.userCard__premiumContainer__h3} ${styles.dark}`
              }
            >
              Try Premium for free
            </h3>
          </div>
        </div>

        <div className={styles.separationLine}></div>

        <div className={styles.userCard__items}>
          <TurnedInIcon
            className={
              lightMode
                ? `${styles.userCard__items__icon}`
                : `${styles.userCard__items__icon} ${styles.dark}`
            }
          />
          <h3
            className={
              lightMode
                ? `${styles.userCard__items__h3}`
                : `${styles.userCard__items__h3} ${styles.dark}`
            }
          >
            My items
          </h3>
        </div>
      </div>

      <div
        className={
          lightMode
            ? `${styles.discoverCard}`
            : `${styles.discoverCard} ${styles.dark}`
        }
      >
        <div className={styles.discoverCard__linksContainer}>
          <p className={styles.discoverCard__linksContainer__link}>Groups</p>
          <p className={styles.discoverCard__linksContainer__link}>Events</p>
          <p className={styles.discoverCard__linksContainer__link}>
            Followed Hashtags
          </p>
        </div>
        <div className={styles.separationLine}></div>

        <div className={styles.discoverCard__discoverMore}>
          <h3
            className={
              lightMode
                ? `${styles.discoverCard__discoverMore__h3}`
                : `${styles.discoverCard__discoverMore__h3} ${styles.dark}`
            }
          >
            Discover More
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;

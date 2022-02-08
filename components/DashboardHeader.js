import styles from "../styles/Dashboard/DashboardHeader.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Image from 'next/image';

const DashboardHeader = ({ lightMode, setLightMode }) => {
  return (
    <header
      className={
        lightMode
          ? `${styles.dashboardHeaderBg}`
          : `${styles.dashboardHeaderBg} ${styles.dark}`
      }
    >
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardHeader__left}>
          <Image
            className={styles.dashboardHeader__left__img}
            src={lightMode ? "/linkedin-icon.svg" : "/linkedin-icon-dark.svg"}
            alt="linkedin icon"
            width="50px" height="50px"
          />
          <SearchIcon
            className={
              lightMode
                ? `${styles.dashboardHeader__left__icon}`
                : `${styles.dashboardHeader__left__icon} ${styles.dark}`
            }
          />
        </div>
        <div className={styles.dashboardHeader__right}>
          <nav>
            <ul className={styles.dashboardHeader__navbar}>
              <li>
                <HomeIcon
                  className={
                    lightMode
                      ? `${styles.dashboardHeader__navbar__icon} ${styles.blackIcon}`
                      : `${styles.dashboardHeader__navbar__icon} ${styles.whiteIcon}`
                  }
                />
              </li>
              <li>
                <PeopleIcon
                  className={
                    lightMode
                      ? `${styles.dashboardHeader__navbar__icon}`
                      : `${styles.dashboardHeader__navbar__icon} ${styles.dark}`
                  }
                />
              </li>
              <li>
                <ChatIcon
                  className={
                    lightMode
                      ? `${styles.dashboardHeader__navbar__icon}`
                      : `${styles.dashboardHeader__navbar__icon} ${styles.dark}`
                  }
                />
              </li>
              <li>
                <NotificationsIcon
                  className={
                    lightMode
                      ? `${styles.dashboardHeader__navbar__icon}`
                      : `${styles.dashboardHeader__navbar__icon} ${styles.dark}`
                  }
                />
              </li>
            </ul>
          </nav>
          <input type="checkbox" id="checkbox" className={styles.checkbox} />
          <label
            htmlFor="checkbox"
            className={styles.label}
            onClick={() => setLightMode(!lightMode)}
          >
            <Brightness3Icon className={styles.toggleTheme__icon} />
            <WbSunnyIcon className={styles.toggleTheme__icon} />
            <div className={styles.ball}></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

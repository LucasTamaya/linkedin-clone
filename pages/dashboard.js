import styles from "../styles/Dashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";

const Dashboard = () => {
  // va me permettre de toggle entre le theme clair et sombre
  const [lightMode, setLightMode] = useState(true);

  return (
    <>
      <header
        className={
          lightMode
            ? `${styles.dashboardHeaderBg}`
            : `${styles.dashboardHeaderBg} ${styles.dark}`
        }
      >
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardHeader__left}>
            <img
              className={styles.dashboardHeader__left__img}
              src={lightMode ? "/linkedin-icon.svg" : "/linkedin-icon-dark.svg"}
              alt="linkedin icon"
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
      <main
        className={
          lightMode
            ? `${styles.mainDashboardBg}`
            : `${styles.mainDashboardBg} ${styles.dark}`
        }
      >
        <div className={styles.mainDashboard}>
          <div
            className={
              lightMode
                ? `${styles.userCard}`
                : `${styles.userCard} ${styles.dark}`
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

          <div
            className={
              lightMode
                ? `${styles.postsContainer}`
                : `${styles.postsContainer} ${styles.dark}`
            }
          >
            <div
              className={
                lightMode
                  ? `${styles.startPost}`
                  : `${styles.startPost} ${styles.dark}`
              }
            >
              <div className={styles.startPost__top}>
                <FaceIcon
                  className={
                    lightMode
                      ? `${styles.post__icon}`
                      : `${styles.post__icon} ${styles.dark}`
                  }
                />
                <input
                  type="text"
                  placeholder="Start a post"
                  className={
                    lightMode
                      ? `${styles.startPost__top__input}`
                      : `${styles.startPost__top__input} ${styles.dark}`
                  }
                />
              </div>
              <div className={styles.startPost__bottom}>
                <div className={styles.startPost__bottom__iconContainer}>
                  <PhotoSizeSelectActualIcon
                    style={{ color: "#005B96" }}
                    className={styles.startPost__bottom__iconContainer__icon}
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.startPost__bottom__iconContainer__para}`
                        : `${styles.startPost__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Photo
                  </p>
                </div>
                <div className={styles.startPost__bottom__iconContainer}>
                  <VideocamIcon
                    style={{ color: "#79FE0C " }}
                    className={styles.startPost__bottom__iconContainer__icon}
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.startPost__bottom__iconContainer__para}`
                        : `${styles.startPost__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Video
                  </p>
                </div>
                <div className={styles.startPost__bottom__iconContainer}>
                  <WorkIcon
                    style={{ color: "#add8e6 " }}
                    className={styles.startPost__bottom__iconContainer__icon}
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.startPost__bottom__iconContainer__para}`
                        : `${styles.startPost__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Job
                  </p>
                </div>
                <div className={styles.startPost__bottom__iconContainer}>
                  <ArticleIcon
                    style={{ color: "#FF3232" }}
                    className={styles.startPost__bottom__iconContainer__icon}
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.startPost__bottom__iconContainer__para}`
                        : `${styles.startPost__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Write Article
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                lightMode ? `${styles.post}` : `${styles.post} ${styles.dark}`
              }
            >
              <div className={styles.post__top}>
                <div className={styles.post__top__left}>
                  <FaceIcon
                    className={
                      lightMode
                        ? `${styles.post__icon}`
                        : `${styles.post__icon} ${styles.dark}`
                    }
                  />
                  <div className={styles.post__top__left__userContainer}>
                    <p
                      className={
                        lightMode
                          ? `${styles.post__top__left__userContainer__name}`
                          : `${styles.post__top__left__userContainer__name} ${styles.dark}`
                      }
                    >
                      Lucas T
                    </p>{" "}
                    {/* récupérer celui du login */}
                    <p
                      className={
                        lightMode
                          ? `${styles.post__top__left__userContainer__email}`
                          : `${styles.post__top__left__userContainer__email} ${styles.dark}`
                      }
                    >
                      lucas.tamaya@orange.fr
                    </p>{" "}
                    {/* récupérer celui du login */}
                    <p
                      className={
                        lightMode
                          ? `${styles.post__top__left__userContainer__time}`
                          : `${styles.post__top__left__userContainer__time} ${styles.dark}`
                      }
                    >
                      Timestamp en minutes
                    </p>
                  </div>
                </div>
                <div className={styles.post__top__right}>
                  <MoreHorizIcon className={styles.post__top__right__icon} />
                </div>
              </div>

              <p
                className={
                  lightMode
                    ? `${styles.post__textPost}`
                    : `${styles.post__textPost} ${styles.dark}`
                }
              >
                voila le texte du poste voila le texte du poste voila le texte
                du poste voila le texte du poste voila le texte du poste voila
                le texte du poste voila le texte du poste voila le texte du
                poste voila le texte du poste
              </p>

              <div className={styles.post__lineSeparation}></div>

              <div className={styles.post__bottom}>
                <div className={styles.post__bottom__iconContainer}>
                  <ThumbUpAltOutlinedIcon
                    className={
                      lightMode
                        ? `${styles.post__bottom__iconContainer__icon}`
                        : `${styles.post__bottom__iconContainer__icon} ${styles.dark}`
                    }
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.post__bottom__iconContainer__para}`
                        : `${styles.post__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Like
                  </p>
                </div>
                <div className={styles.post__bottom__iconContainer}>
                  <DeleteIcon
                    className={
                      lightMode
                        ? `${styles.post__bottom__iconContainer__icon}`
                        : `${styles.post__bottom__iconContainer__icon} ${styles.dark}`
                    }
                  />
                  <p
                    className={
                      lightMode
                        ? `${styles.post__bottom__iconContainer__para}`
                        : `${styles.post__bottom__iconContainer__para} ${styles.dark}`
                    }
                  >
                    Delete post
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              lightMode
                ? `${styles.sidebar}`
                : `${styles.sidebar} ${styles.dark}`
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

            <img
              src="/Dashboard-Promo-Image.jpg"
              alt="dashboard promo image"
              className={styles.sidebar__img}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

//className={lightMode ? `${styles.}` : `${styles.} ${styles.dark}`}

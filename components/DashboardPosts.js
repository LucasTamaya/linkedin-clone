import styles from "../styles/Dashboard/DashboardPosts.module.css";
import FaceIcon from "@mui/icons-material/Face";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const DashboardPosts = ({ lightMode, openPopUp }) => {
  return (
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
          <button
            onClick={openPopUp}
            className={
              lightMode
                ? `${styles.startPost__top__btn}`
                : `${styles.startPost__top__btn} ${styles.dark}`
            }
          >
            Start a post
          </button>
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
              style={{ color: "#79FE0C" }}
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
          voila le texte du poste voila le texte du poste voila le texte du
          poste voila le texte du poste voila le texte du poste voila le texte
          du poste voila le texte du poste voila le texte du poste voila le
          texte du poste
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
  );
};

export default DashboardPosts;

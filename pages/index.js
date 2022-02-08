import styles from "../styles/Landing.module.css";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/logo-with-text.svg"
          alt="linkedin text logo"
          className={styles.header__img}
          width="150px" height="50px"
        />

        <nav className={styles.header__navbar}>
          <ul className={styles.header__navbar__items__container}>
            <li className={styles.header__navbar__item}>
              <ExploreIcon className={styles.header__navbar__item__icon} />
              <p className={styles.header__navbar__item__para}>Discorver</p>
            </li>
            <li className={styles.header__navbar__item}>
              <PeopleIcon className={styles.header__navbar__item__icon} />
              <p className={styles.header__navbar__item__para}>People</p>
            </li>
            <li className={styles.header__navbar__item}>
              <LiveTvIcon className={styles.header__navbar__item__icon} />
              <p className={styles.header__navbar__item__para}>Learning</p>
            </li>
            <li className={styles.header__navbar__item}>
              <BusinessCenterIcon
                className={styles.header__navbar__item__icon}
              />
              <p className={styles.header__navbar__item__para}>Jobs</p>
            </li>
          </ul>
        </nav>

        <Link href="/sign-in" className={styles.header__link}>
          Sign in
        </Link>
      </header>

      <main className={styles.mainDashboard}>
        <div className={styles.mainDashboard__text}>
          <h1 className={styles.mainDashboard__h1}>
            <span>Welcome to your</span> <span>professional community</span>
          </h1>
          <div className={styles.mainDashboard__item}>
            <h2 className={styles.mainDashboard__h2}>Search for a job</h2>
            <ArrowForwardIosIcon className={styles.mainDashboard__icon} />
          </div>
          <div className={styles.mainDashboard__item}>
            <h2 className={styles.mainDashboard__h2}>Find a person you know</h2>
            <ArrowForwardIosIcon className={styles.mainDashboard__icon} />
          </div>
          <div className={styles.mainDashboard__item}>
            <h2 className={styles.mainDashboard__h2}>Learn a new skill</h2>
            <ArrowForwardIosIcon className={styles.mainDashboard__icon} />
          </div>
        </div>
        <div className={styles.mainDashboard__backgroundImg}></div>
      </main>
    </>
  );
}

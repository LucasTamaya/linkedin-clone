import styles from "../styles/Dashboard.module.css";
import { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import CloseIcon from "@mui/icons-material/Close";
import DashboardHeader from "../components/DashboardHeader";
import DashboardUser from "../components/DashboardUser";
import DashboardPosts from "../components/DashboardPosts";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardPopUp from "../components/DashboardPopUp";

const Dashboard = () => {
  // va me permettre de toggle entre le theme clair et sombre
  const [lightMode, setLightMode] = useState(true);

  // ouvre une pop up pour ajouter un post
  const openPopUp = () => {
    document.querySelector(
      ".DashboardPopUp_popUpContainer__9ZJvR"
    ).style.opacity = "1";
    document.querySelector(
      ".DashboardPopUp_popUpContainer__9ZJvR"
    ).style.pointerEvents = "initial";
  };

  // ferme le pop up
  const closePopUp = () => {
    document.querySelector(
      ".DashboardPopUp_popUpContainer__9ZJvR"
    ).style.opacity = "0";
    document.querySelector(
      ".DashboardPopUp_popUpContainer__9ZJvR"
    ).style.pointerEvents = "none";
  };

  return (
    <>
      <DashboardHeader lightMode={lightMode} setLightMode={setLightMode} />
      <main
        className={
          lightMode
            ? `${styles.mainDashboardBg}`
            : `${styles.mainDashboardBg} ${styles.dark}`
        }
      >
        <div className={styles.mainDashboard}>
          <DashboardUser lightMode={lightMode} />

          <DashboardPosts lightMode={lightMode} openPopUp={openPopUp} />

          <DashboardSidebar lightMode={lightMode} />
        </div>
      </main>
      <DashboardPopUp lightMode={lightMode} closePopUp={closePopUp} />
    </>
  );
};

export default Dashboard;

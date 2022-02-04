export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

import styles from "../styles/Dashboard/Dashboard.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import DashboardHeader from "../components/DashboardHeader";
import DashboardUser from "../components/DashboardUser";
import DashboardPosts from "../components/DashboardPosts";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardPopUp from "../components/DashboardPopUp";

const Dashboard = ({ data }) => {
  const router = useRouter();
  // fonction a fin de rafraîchir nos props à chaque ajout ou suppression
  const refreshData = () => {
    router.replace(router.asPath);
  };

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

          <DashboardPosts
            data={data}
            lightMode={lightMode}
            openPopUp={openPopUp}
            refreshData={refreshData}
          />

          <DashboardSidebar lightMode={lightMode} />
        </div>
      </main>
      <DashboardPopUp lightMode={lightMode} closePopUp={closePopUp} refreshData={refreshData}/>
    </>
  );
};

export default Dashboard;

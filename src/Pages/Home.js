import styles from "./Home.module.css";
import createEventBtn from "../Assets/createEvent_btn.png";
import navBar from "../Assets/navBar.png";

const Home = () => {
  return (
    <>
      <div className={styles.homeDiv}>
        <div className={styles.home_navBar}>
          <img src={navBar} alt="Navigation bar"></img>
        </div>
        <div className={styles.home_text}>
          <h1>Facebook events without Facebook</h1>
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className={styles.home_eventBtn}>
          <img src={createEventBtn} alt="Button for create new event"></img>
        </div>
        <div className={styles.screens}>
          <div className={styles.screens_scrn1}></div>
          <div className={styles.screens_scrn2}></div>
          <div className={styles.screens_scrn3}></div>
        </div>
      </div>
    </>
  );
};
export default Home;

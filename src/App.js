import Header from "./UI/Header";
import WebsiteRoutes from "./Routes/WebsiteRoutes";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.mainApp}>
        <Header />
        <WebsiteRoutes />
      </div>
    </>
  );
}

export default App;

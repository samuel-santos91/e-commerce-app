import { Link } from "react-router-dom";

import logo from "../../assets/images/completed.png";
import styles from "./PurchaseFinished.module.scss"; 

const PurchaseFinished = () => {
  return (
    <main className={styles["main-section"]}>
      <img className={styles["main-section__img"]} src={logo} alt="thank you for supporting a small business" />
      <Link className={styles["main-section__back"]} to="/">back to main page</Link>
    </main>
  );
};

export default PurchaseFinished;

import styles from "./Header.module.scss";
import bgImage from "../../assets/images/candles.jpg";

const Header = ({scrollTrigger}) => {
  return (
    <header className={styles.header}>
      <img
        className={styles["header__introImage"]}
        src={bgImage}
        alt="multiple candles in the dark"
      />
      
      <h1 className={styles["header__introTitle"]}>
        Light Up <br />{" "}
        <span className={styles["header__introTitle--subtext"]}>
          The Flame Within
        </span>
      </h1>

      <button onClick={()=> scrollTrigger()} className={styles["header__btn"]} type="button">
        See Featured
      </button>
    </header>
  );
};

export default Header;

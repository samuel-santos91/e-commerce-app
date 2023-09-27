import styles from "./Header.module.scss";
import bgImage from "../../assets/images/candles.jpg";

const Header = () => {
  return (
    <header>
      <img
        className={styles.introImage}
        src={bgImage}
        alt="multiple candles in the dark"
      />
    </header>
  );
};

export default Header;

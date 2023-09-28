import styles from "./NavBar.module.scss";
import cart from "../../assets/icons/shopCart.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles["navbar__brand"]}>LightUp</p>
      <img className={styles["navbar__cart"]} src={cart} />
    </nav>
  );
};

export default NavBar;

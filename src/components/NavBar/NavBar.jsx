import { Link } from "react-router-dom";
import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import styles from "./NavBar.module.scss";
import cart from "../../assets/icons/shopCart.png";

const NavBar = () => {
  const { cartCandles, setOpenCart } = useContext(CandlesContext);

  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>
        <p
          onClick={() => window.scrollTo(0, 0)}
          className={styles["navbar__brand"]}
        >
          LightUp
        </p> 
      </Link>
      <img
        onClick={() => setOpenCart(true)}
        className={styles["navbar__cart"]}
        src={cart}
      />
      {cartCandles.length !== 0 && (
        <div className={styles["navbar__add-to-cart"]} />
      )}
    </nav>
  );
};

export default NavBar;

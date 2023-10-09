import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import AllProductsSection from "../../containers/AllProductsSection/AllProductsSection";
import Favourites from "../../components/Favourites/Favourites";
import CartDisplay from "../../containers/CartDisplay/CartDisplay";
import styles from "./AllProducts.module.scss";

const AllProducts = () => {
  const {openCart} = useContext(CandlesContext);

  return (
    <section className={styles.section}>
      <h2 className={styles["section__title"]}>Shop All</h2>
      <p className={styles["section__sub-title"]}>Discover the world's best candles</p>
      <AllProductsSection />
      <Favourites/>
      {openCart && <CartDisplay />}
    </section> 
  )
}

export default AllProducts
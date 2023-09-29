import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import styles from "./ProductDisplay.module.scss";

const ProductDisplay = () => {
  const { candle } = useContext(CandlesContext);

  return (
    <section className={styles["product-section"]}>
      <img
        className={styles["product-section__img"]}
        src={candle.imageLink}
        alt="candle"
      />
      <div className={styles["product-section__details"]}>
        <h1 className={styles["product-section__details--title"]}>
          {candle.name}
        </h1>
        <p className={styles["product-section__details--description"]}>{candle.description}</p>
        <p className={styles["product-section__details--price"]}>${candle.price}</p>
      </div>
    </section>
  );
};

export default ProductDisplay;

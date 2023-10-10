import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./AllProductsSection.module.scss";

const AllProductsSection = () => {
  const { candles } = useContext(CandlesContext);

  return (
    <div className={styles["candle-list"]}>
      {candles.length !== 0 ? (
        candles.map((candle) => (
          <CandleCard
            key={candle.id}
            id={candle.id}
            title={candle.name}
            image={candle.imageLink}
            style={"main-display"}
          />
        ))
      ) : (
        <p className={styles["candle-list__error"]}>Something Went Wrong</p>
      )}
    </div>
  );
};

export default AllProductsSection;

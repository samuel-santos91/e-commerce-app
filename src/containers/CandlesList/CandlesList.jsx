import { useContext } from "react";
import Carousel from "nuka-carousel";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./CandlesList.module.scss";
import { carouselSettings } from "./carouselSettings";

const CandlesList = () => {
  const { candles, featuredList } = useContext(CandlesContext);

  return (
    <div className={styles["candle-list"]}>
      {featuredList(candles)?.length !== 0 ? (
        <Carousel
          className={styles["candle-list__carousel"]}
          {...carouselSettings}
        >
          {featuredList(candles)?.map((candle) => (
            <CandleCard
              key={candle.id}
              id={candle.id}
              title={candle.name}
              image={candle.imageLink}
              style={"featured"}
            />
          ))}
        </Carousel>
      ) : (
        <p className={styles["candle-list__error"]}>Something Went Wrong</p>
      )}
    </div>
  );
};

export default CandlesList;

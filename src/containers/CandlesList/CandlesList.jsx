import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./CandlesList.module.scss";
import { carouselSettings } from "./carouselSettings";

const CandlesList = () => {
  const { candles, featuredList } = useContext(CandlesContext);

  return (
    <div className={styles["candle-list"]}>
      {featuredList(candles)?.length !== 0 ? (
        <Slider className={styles["candle-list__slider"]} {...carouselSettings}>
          {featuredList(candles)?.map((candle) => (
            <CandleCard
              key={candle.id}
              id={candle.id}
              title={candle.name}
              image={candle.imageLink}
              featStyle={"featured-display"}
            />
          ))}
        </Slider>
      ) : (
        <p className={styles["candle-list__error"]}>Something Went Wrong</p>
      )}
    </div>
  );
};

export default CandlesList;

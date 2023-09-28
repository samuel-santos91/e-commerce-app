import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./CandlesList.module.scss";

const CandlesList = () => {
  const { candles } = useContext(CandlesContext);

  const carouselSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["candle-list"]}>
      <Slider className={styles["candle-list__slickDots"]} {...carouselSettings}>
        {candles.map((candle) => (
          <CandleCard
            key={candle.id}
            title={candle.name}
            image={candle.imageLink}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CandlesList;

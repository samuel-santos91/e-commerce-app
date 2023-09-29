import { useContext } from "react";
import { Link } from "react-router-dom";

import { CandlesContext } from "../../context/ProductsContextProvider";
import styles from "./CandleCard.module.scss";

const CandleCard = ({ id, title, image }) => {
  const { singularCandle } = useContext(CandlesContext);

  return (
    <article className={styles.card}>
      <Link to={`/product/${id}`}>
        <img
          onClick={() => singularCandle(id)}
          className={styles["card__img"]}
          src={image}
          alt="candle"
        />
      </Link>
      <p className={styles["card__title"]}>{title}</p>
    </article>
  );
};

export default CandleCard;

import { Link } from "react-router-dom";

import styles from "./CandleCard.module.scss";

const CandleCard = ({ id, title, image, style }) => {
  return (
    <article className={style === "small" ? styles["small-card"] : styles.card}>
      <Link to={`/product/${id}`}>
        <img
          className={
            style === "small" ? styles["small-card__img"] : styles["card__img"]
          }
          src={image}
          alt="candle"
        />
      </Link>
      <p
        className={
          style === "small"
            ? styles["small-card__title"]
            : styles["card__title"]
        }
      >
        {title}
      </p>
    </article>
  );
};

export default CandleCard;

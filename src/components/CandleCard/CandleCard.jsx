import { Link } from "react-router-dom";

import styles from "./CandleCard.module.scss";

const CandleCard = ({ id, title, image }) => {
  return (
    <article className={styles.card}>
      <Link to={`/product/${id}`}>
        <img
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

import { Link } from "react-router-dom";

import styles from "./CandleCard.module.scss";

const CandleCard = ({ id, title, image, style }) => {
  return (
    <article className={styles[style]}>
      <Link to={`/product/${id}`}>
        <img className={styles[`${style}__img`]} src={image} alt="candle" />
      </Link>
      <p className={styles[`${style}__title`]}>{title}</p>
    </article>
  );
};

export default CandleCard;

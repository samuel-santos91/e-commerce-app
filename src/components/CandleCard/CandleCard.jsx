import { Link } from "react-router-dom";

import styles from "./CandleCard.module.scss";

const CandleCard = ({ id, title, image, style, featStyle }) => {
  return (
    <article className={featStyle ? styles[featStyle] : styles[style]}>
      <Link to={`e-commerce-app/product/${id}`}>
        <img
          className={
            featStyle ? styles[`${featStyle}__img`] : styles[`${style}__img`]
          }
          src={image}
          alt="candle"
        />
      </Link>
      <p
        className={
          featStyle ? styles[`${featStyle}__title`] : styles[`${style}__title`]
        }
      >
        {title}
      </p>
    </article>
  );
};

export default CandleCard;

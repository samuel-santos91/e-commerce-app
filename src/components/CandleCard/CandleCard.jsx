import styles from "./CandleCard.module.scss";

const CandleCard = ({title, image}) => {
  return (
    <article className={styles.card}>
      <img className={styles["card__img"]} src={image} alt="candle" />
      <p className={styles["card__title"]}>{title}</p>
    </article>
  );
};

export default CandleCard;

import CandlesList from "../CandlesList/CandlesList";
import styles from "./ProductSection.module.scss";

const ProductSection = () => {
  return (
    <section>
      <h2 className={styles["section-title"]}>Now Trending</h2>
      <CandlesList />
    </section>
  );
};

export default ProductSection;

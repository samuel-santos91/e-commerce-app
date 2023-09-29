import { useRef } from "react";

import CandlesList from "../CandlesList/CandlesList";
import styles from "./ProductSection.module.scss";

const ProductSection = ({ setScroll }) => {
  const targetRef = useRef(null);

  if (setScroll.scroll) {
    targetRef.current.scrollIntoView();
  }

  return (
    <section>
      <h2 ref={targetRef} className={styles["section-title"]}>Now Trending</h2>
      <CandlesList />
    </section>
  );
};

export default ProductSection;

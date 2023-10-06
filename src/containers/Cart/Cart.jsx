import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const {cartCandles} = useContext(CandlesContext);

  return (
    <div className={styles.cart}>
      {cartCandles &&
        cartCandles.map((data) => (
          <CartItem
            key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            imageLink={data.imageLink}
            price={data.price}
            scent={data.scent}
            quantityInStock={data.quantityInStock}
            quantityChosen={data.quantityChosen}
          />
        ))}

      <section className={styles.checkout}>
        <div className={styles["checkout__total"]}>
          <p className={styles["checkout__total--title"]}>Total</p>
          <p className={styles["checkout__total--value"]}>$109.99</p>
        </div>
        <button className={styles["checkout__btn"]} type="button">
          Check Out
        </button>
      </section>
    </div>
  );
};

export default Cart;

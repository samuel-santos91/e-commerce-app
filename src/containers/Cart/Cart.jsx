import { useState, useEffect } from "react";

import { getAllCartItems } from "../../services/candle-service";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [cartList, setCartList] = useState(null);

  useEffect(() => {
    getAllCartItems()
      .then((candles) => setCartList(candles))
      .catch((e) => console.log(e));
  }, []);

  console.log(cartList)

  return (
    <div className={styles.cart}>
      {cartList &&
        cartList.map((data) => (
          <CartItem
            key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            imageLink={data.imageLink}
            price={data.price}
            scent={data.scent}
            quantity={data.quantity}
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

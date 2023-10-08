import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { updateQuantityInStock, deleteFromCart } from "../../services/candle-service";
import { CandlesContext } from "../../context/ProductsContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartCandles, cartTotalSum, setOpenCart } = useContext(CandlesContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    cartCandles.map((candle) =>
      updateQuantityInStock(
        candle.idRef,
        candle.scent,
        candle.quantityChosen,
        candle.quantityInStock
      )
    );
    cartCandles.map((candle)=> {
      deleteFromCart(candle.id)
    })
    setOpenCart(false);
    navigate("/completed")
  };

  return (
    <div className={styles.cart}>
      {cartCandles.length !== 0 ? (
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
        ))
      ) : (
        <p className={styles["cart__empty"]}>Your Cart Is Still Empty</p>
      )}

      {cartCandles.length !== 0 && (
        <section className={styles.checkout}>
          <div className={styles["checkout__total"]}>
            <p className={styles["checkout__total--title"]}>Total</p>
            <p className={styles["checkout__total--value"]}>
              ${cartTotalSum(cartCandles).toFixed(2)}
            </p>
          </div>
          <button
            onClick={checkoutHandler}
            className={styles["checkout__btn"]}
            type="button"
          >
            Check Out
          </button>
        </section>
      )}
    </div>
  );
};

export default Cart;

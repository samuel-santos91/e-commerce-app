import { deleteFromCart } from "../../services/candle-service";
import deleteIcon from "../../assets/icons/delete.png";
import styles from "./CartItem.module.scss";

const CartItem = ({
  id,
  name,
  description,
  imageLink,
  price,
  scent,
  quantityInStock,
  quantityChosen,
}) => {
  const changeQuantityHadler = (e) => {
    if (e.target.innerText === "+") {
      console.log("plus");
    } else {
      console.log("minus");
    }
  };

  return (
    <article>
      <div className={styles["cart-item"]}>
        <section className={styles["cart-item__img-container"]}>
          <img
            className={styles["cart-item__img-container--img"]}
            src={imageLink}
            alt="img"
          />
        </section>

        <section className={styles["cart-item__details"]}>
          <div className={styles.item}>
            <div className={styles["item__info"]}>
              <p className={styles["item__info--title"]}>{name}</p>
              <p className={styles["item__info--description"]}>
                {description} - {scent} scent
              </p>
            </div>
            <img
              onClick={() => deleteFromCart(id)}
              className={styles["item__remove"]}
              src={deleteIcon}
              alt="delete icon"
            />
          </div>

          <div className={styles["item-volume"]}>
            <div className={styles["item-volume__quantity"]}>
              <p
                onClick={changeQuantityHadler}
                className={styles["item-volume__quantity--control"]}
              >
                -
              </p>
              <p className={styles["item-volume__quantity--value"]}>
                {quantityChosen}
              </p>
              <p
                onClick={changeQuantityHadler}
                className={styles["item-volume__quantity--control"]}
              >
                +
              </p>
            </div>
            <p className={styles["item-volume__price"]}>${price}</p>
          </div>
        </section>
      </div>
      <hr className={styles.line} />
    </article>
  );
};

export default CartItem;

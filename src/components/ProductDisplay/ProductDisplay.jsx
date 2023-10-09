import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import {
  getCandleById,
  updateFavouriteStatus,
  addToCart,
} from "../../services/candle-service";
import { CandlesContext } from "../../context/ProductsContextProvider";
import styles from "./ProductDisplay.module.scss";
import favouriteIcon from "../../assets/icons/favourite.png";
import unfavouriteIcon from "../../assets/icons/unfavourite.png";

const ProductDisplay = () => {
  const { scentList, scentQuantity } = useContext(CandlesContext);
  const { id } = useParams();

  const [candle, setCandle] = useState(null);
  const [scent, setScent] = useState(null);
  const [quantityOfScent, setQuantityOfScent] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCandleById(id)
      .then((candle) => {
        setCandle(candle);
        setFavourite(candle.favourite);
      })
      .catch((e) => setError(e));
  }, [id]);

  const scentHandler = (e) => {
    const chosenScent = e.target.value;
    setScent(chosenScent);
    const quantity = scentQuantity(chosenScent, candle);
    setQuantityOfScent(quantity);
  };

  const favouriteHandler = () => {
    updateFavouriteStatus(id)
      .then((favourite) => setFavourite(favourite))
      .catch((e) => console.log(e));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { id, name, description, imageLink, price } = candle;
    const chosenCandle = {
      idRef: id,
      name: name,
      description: description,
      imageLink: imageLink,
      price: price,
      scent: scent,
      quantityInStock: quantityOfScent,
      quantityChosen: 1,
    };
    if (scent) {
      if(quantityOfScent === 0) return;
      addToCart(chosenCandle);
    }
  };

  return (
    <section className={styles["product-section"]}>
      {candle && (
        <>
          <section className={styles["product-section__product"]}>
            <img
              className={styles["product-section__product--img"]}
              src={candle.imageLink}
              alt="candle"
            />
            <button
              onClick={favouriteHandler}
              type="button"
              className={styles["product-section__product--btn"]}
            >
              <img
                src={favourite ? unfavouriteIcon : favouriteIcon}
                alt="heart favourite icon"
              />
              {favourite ? "Unfavourite" : "Favourite"}
            </button>
          </section>

          <section className={styles["product-section__details"]}>
            <h1 className={styles["product-section__details--title"]}>
              {candle.name}
            </h1>
            <p className={styles["product-section__details--description"]}>
              {candle.description}
            </p>
            <p className={styles["product-section__details--price"]}>
              ${candle.price}
            </p>

            <form onSubmit={submitHandler}>
              <div className={styles["product-section__details--scents"]}>
                {candle &&
                  scentList(candle.scent).map((scent) => (
                    <div key={scent}>
                      <input
                        type="radio"
                        id={scent}
                        name="scent"
                        value={scent}
                        onChange={scentHandler}
                      />
                      <label htmlFor={scent}>{scent}</label>
                    </div>
                  ))}
              </div>
              <button>Add to Cart</button>
            </form>

            {quantityOfScent > 0 ? (
              <p className={styles["product-section__details--availability"]}>
                In stock: {quantityOfScent} units
              </p>
            ) : quantityOfScent === null ? (
              <p className={styles["product-section__details--availability"]}>
                Check availability. Choose a scent.
              </p>
            ) : (
              <p className={styles["product-section__details--availability"]}>
                Not Available
              </p>
            )}
          </section>
        </>
      )}
      {error && (
        <p className={styles["product-section__error-message"]}>
          Product Not Found
        </p>
      )}
    </section>
  );
};

export default ProductDisplay;

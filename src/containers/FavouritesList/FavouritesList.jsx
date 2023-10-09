import { useContext, useEffect, useState } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./FavouritesList.module.scss";
import { getAllCandles } from "../../services/candle-service";

const FavouritesList = () => {
  const { favouritesList, candles } = useContext(CandlesContext);
  const [listOfFavourites, setListOfFavourites] = useState(null);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setListOfFavourites(favouritesList(candles)))
      .catch((e) => console.log(e));
  }, []);

  console.log(candles)

  return (
    <section className={styles.list}>
      {listOfFavourites ? listOfFavourites.map((candle) => (
        <CandleCard
          key={candle.id}
          id={candle.id}
          title={candle.name}
          image={candle.imageLink}
          style={"favourite"}
        />
      )) : <p className={styles["list__no-items"]}>No items on your list of favourites</p>} 
    </section>
  );
};

export default FavouritesList;

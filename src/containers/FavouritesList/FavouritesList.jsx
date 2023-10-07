import { useContext, useEffect, useState } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import CandleCard from "../../components/CandleCard/CandleCard";
import styles from "./FavouritesList.module.scss";
import { getAllCandles } from "../../services/candle-service";

const FavouritesList = () => {
  const { favouritesList } = useContext(CandlesContext);
  const [listOfFavourites, setListOfFavourites] = useState([]);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setListOfFavourites(favouritesList(candles)))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className={styles.list}>
      {listOfFavourites.length !== 0 ? listOfFavourites.map((candle) => (
        <CandleCard
          key={candle.id}
          id={candle.id}
          title={candle.name}
          image={candle.imageLink}
          style={"small"}
        />
      )) : <p className={styles["list__no-items"]}>No items on your list of favourites</p>} 
    </section>
  );
};

export default FavouritesList;

import { createContext, useEffect, useState } from "react";

import { getAllCandles, subscribeToCartItems } from "../services/candle-service";

export const CandlesContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [candles, setCandles] = useState([]);
  const [cartCandles, setCartCandles] = useState([]);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setCandles(candles))
      .catch((e) => console.log(e));

    const unsub = subscribeToCartItems(setCartCandles);
    return () => unsub();
  }, []);

  const scentList = (scents) => {
    let scentListArray = [];
    for (let scent in scents) {
      scentListArray.push(scent);
    }
    return scentListArray;
  };

  const scentQuantity = (scentName, candle) => {
    return candle?.scent[scentName]?.quantity;
  };

  const favouritesList = (candles) => {
    const list = candles?.filter((candle) => candle.favourite === true);
    return list;
  };

  const allowQuantityChange = (symbol, quantityChosen, quantityInStock) => {
    if (symbol === "+" && quantityChosen === quantityInStock) {
      return false;
    } else if (symbol === "-" && quantityChosen === 0) {
      return false;
    } else return true;
  };

  const cartTotalSum = (cartCandleArray) => {
    return cartCandleArray.reduce((accumulator, currentItem) => {
      const itemTotal = currentItem.price * currentItem.quantityChosen;
      return accumulator + itemTotal;
    }, 0);
  };

  return (
    <CandlesContext.Provider
      value={{
        openCart,
        setOpenCart,
        candles,
        setCandles,
        cartCandles,
        setCartCandles,
        scentList,
        scentQuantity,
        favouritesList,
        allowQuantityChange,
        cartTotalSum,
      }}
    >
      {children}
    </CandlesContext.Provider>
  );
};

export default ProductsContextProvider;

import { createContext, useEffect, useState } from "react";

import { getAllCandles, getAllCartItems } from "../services/candle-service";

export const CandlesContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [candles, setCandles] = useState([]);
  const [cartCandles, setCartCandles] = useState([]);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setCandles(candles))
      .catch((e) => console.log(e));

    getAllCartItems()
      .then((list) => setCartCandles(list))
      .catch((e) => console.log(e));
  }, [candles, cartCandles]);

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

  return (
    <CandlesContext.Provider
      value={{
        openCart,
        setOpenCart,
        candles,
        cartCandles,
        scentList,
        scentQuantity,
        favouritesList,
      }}
    >
      {children}
    </CandlesContext.Provider>
  );
};

export default ProductsContextProvider;

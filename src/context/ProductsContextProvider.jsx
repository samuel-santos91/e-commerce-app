import { createContext, useEffect, useState } from "react";

import { getAllCandles } from "../services/candle-service";

export const CandlesContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setCandles(candles))
      .catch((e) => console.log(e));
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

  return (
    <CandlesContext.Provider
      value={{ candles, scentList, scentQuantity }}
    >
      {children}
    </CandlesContext.Provider>
  );
};

export default ProductsContextProvider;

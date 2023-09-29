import { createContext, useEffect, useState } from "react";

import { getAllCandles, getCandleById } from "../services/candle-service";

export const CandlesContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [candle, setCandle] = useState({});
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    getAllCandles()
      .then((candles) => setCandles(candles))
      .catch((e) => console.log(e));
  }, []);

  const singularCandle = (id) => {
    getCandleById(id)
      .then((candle) => setCandle(candle))
      .catch((e) => console.log(e));
  };

  return (
    <CandlesContext.Provider value={{ candle, candles, singularCandle }}>
      {children}
    </CandlesContext.Provider>
  );
};

export default ProductsContextProvider;









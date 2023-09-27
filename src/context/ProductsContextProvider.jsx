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

  return (
    <CandlesContext.Provider value={{ candles }}>
      {children}
    </CandlesContext.Provider>
  );
};

export default ProductsContextProvider;

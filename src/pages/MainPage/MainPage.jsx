import { useEffect, useState, useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import Header from "../../components/Header/Header";
import ProductSection from "../../containers/ProductSection/ProductSection";
import Favourites from "../../components/Favourites/Favourites";
import CartDisplay from "../../containers/CartDisplay/CartDisplay";

const MainPage = () => {
  const {openCart} = useContext(CandlesContext);
  const [scroll, setScroll] = useState(false)
  useEffect(()=> {
    setScroll(false)
  }, [scroll])

  return (
    <div>
      <Header scrollTrigger={()=> setScroll(true)}/>
      <ProductSection setScroll={{scroll, setScroll}}/>
      <Favourites/>
      {openCart && <CartDisplay />} 
    </div>
  );
};

export default MainPage; 

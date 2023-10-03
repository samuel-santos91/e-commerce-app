import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import ProductSection from "../../containers/ProductSection/ProductSection";
import Favourites from "../../components/Favourites/Favourites";

const MainPage = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(()=> {
    setScroll(false)
  }, [scroll])

  return (
    <div>
      <Header scrollTrigger={()=> setScroll(true)}/>
      <ProductSection setScroll={{scroll, setScroll}}/>
      <Favourites/>
    </div>
  );
};

export default MainPage; 

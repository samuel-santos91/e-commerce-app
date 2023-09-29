import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import ProductSection from "../../containers/ProductSection/ProductSection";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(()=> {
    setScroll(false)
  }, [scroll])

  return (
    <div>
      <Header scrollTrigger={()=> setScroll(true)}/>
      <ProductSection setScroll={{scroll, setScroll}}/>
      <Footer/>
    </div>
  );
};

export default MainPage; 

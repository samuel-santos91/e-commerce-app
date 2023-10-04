import { useContext } from "react";

import { CandlesContext } from "../../context/ProductsContextProvider";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import CartDisplay from "../../containers/CartDisplay/CartDisplay";

const ProductDetailPage = () => {
  const {openCart} = useContext(CandlesContext);

  return (
    <main>
      <ProductDisplay />
      {openCart && <CartDisplay />} 
    </main>
  );
};

export default ProductDetailPage;

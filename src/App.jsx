import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductsContextProvider from "./context/ProductsContextProvider";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PurchaseFinished from "./pages/PurchaseFinished/PurchaseFinished";
import "./App.css";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="e-commerce-app/" element={<MainPage />} />
            <Route path="e-commerce-app/products" element={<AllProducts />} />
            <Route path="e-commerce-app/product/:id" element={<ProductDetailPage />} />
            <Route path="e-commerce-app/completed" element={<PurchaseFinished />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </>
  );
}

export default App;

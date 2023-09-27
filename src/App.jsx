import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import ProductsContextProvider from "./context/ProductsContextProvider";

import "./App.css";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </>
  );
}

export default App;

import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  ShareLayoutPage,
  ShareProductLayout,
  SingleProduct,
} from "./pages";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ShareProductLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

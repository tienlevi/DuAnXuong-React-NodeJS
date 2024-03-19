import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import { Admin, ProductPage } from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/products" element={<ProductPage />} />
    </Routes>
  );
}

export default App;

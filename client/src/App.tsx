import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import { AddPage, Admin, EditPage, ProductPage } from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/products" element={<ProductPage />} />
      <Route path="/admin/add" element={<AddPage />} />
      <Route path="/admin/edit/:id" element={<EditPage />} />
    </Routes>
  );
}

export default App;

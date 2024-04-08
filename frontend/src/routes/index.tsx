import Signin from "@/pages/(website)/(auth)/Signin";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductManagement from "@/pages/(dashboard)/product/page";
import ProductAdd from "@/pages/(dashboard)/product/add";
import NotFound from "@/pages/(website)/404/page";
import AboutPage from "@/pages/(website)/about/page";
import CartPage from "@/pages/(website)/cart/page";
import ContactPage from "@/pages/(website)/contact/page";
import HomePage from "@/pages/(website)/home/page";
import OrderPage from "@/pages/(website)/order/page";
import CategoryDetail from "@/pages/(website)/product/category/detail/page";
import DetailProduct from "@/pages/(website)/product/detail/page";
import ShopPage from "@/pages/(website)/product/page";
import LayoutWebsite from "@/pages/(website)/layout";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProductEdit from "@/pages/(dashboard)/product/edit";
import SignUp from "@/pages/(website)/(auth)/Signup";
import Profile from "@/pages/(website)/profile/Profile";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="products/:id" element={<DetailProduct />} />
                    <Route path="categories/:id" element={<CategoryDetail />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="orders" element={<OrderPage />} />
                </Route>
                <Route
                    path="admin"
                    element={
                        <PrivateRoute>
                            <LayoutAdmin />
                        </PrivateRoute>
                    }
                >
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/edit/:id" element={<ProductEdit />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;

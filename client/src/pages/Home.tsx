import { useEffect, useState } from "react";
import { IProduct } from "../interface";
import { getProducts } from "../api/product";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Products from "../components/Product/Products";
import Blog from "../components/Blog/Blog";
import Services from "../components/Services/Services";
import Shop from "../components/Shop/Shops";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response: any = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Products products={products} />
      <Shop />
      <Blog />
      <Services />
      <Footer />
    </>
  );
}

export default Home;

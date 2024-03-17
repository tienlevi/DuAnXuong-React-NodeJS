import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Products from "../components/Product/Products";
import Blog from "../components/Blog/Blog";
import Services from "../components/Services/Services";
import Shop from "../components/Shop/Shops";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Shop />
      <Blog />
      <Services />
      <Footer />
    </>
  );
}

export default Home;

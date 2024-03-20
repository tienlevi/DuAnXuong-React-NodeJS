import { useParams } from "react-router-dom";
import ProductDetail from "../components/Product/ProductDetail";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

function Detail() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Banner />
      <ProductDetail id={id} />
      <Services />
      <Footer />
    </>
  );
}

export default Detail;

import Pay from "../components/Pay/Pay";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";

function Checkout() {
  return (
    <>
      <Header />
      <Banner />
      <Pay />
      <Services />
      <Footer />
    </>
  );
}

export default Checkout;

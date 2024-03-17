import { Link } from "react-router-dom";
import "./style.scss";
import "../../_mixin.scss";

function Products() {
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://picsum.photos/id/10/300/300"
                    className="product__thumbnail"
                  />
                  <span className="product-sale">30%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="/" className="product__link">
                      Syltherine
                    </Link>
                  </h3>
                  <Link to="/" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">$200</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview">
                    <Link
                      to="/detail"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="btn product-action__addtocart">
                    Add To Cart
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nN-eGYSoo2N~5E9TMitsyPnOJ09WG-R3ajjROCcAh2PyqWlNRkRjNC-T7-cqH8H5L8xTCfKdU1z00KJE7bFK00XZeoWadMyZVwTuSPi3BypBNuNRO8fBgNfhIMjBwUHs-UeNxT0cm4UrACNahKEi-jXzUdjMPlFKoFSJUzefmKW1JdCG8E9ar9hEwhYm2I~ygRh9p282GyWrOiqTiNX2mkHOrSvPxRTWR161Egl7LjbieNkzlr8yLiO3yPVxbw6pSaHpNg~8Epn85ike-ULfZ5nLgyH4ljv5mqJPf6Le~AgcpX~Z9Vty15CKq3osuADlwmJO-x25s0hC0IbVvVJZeQ__"
                    className="product__thumbnail"
                  />
                  <span className="product-new">New</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="/" className="product__link">
                      Syltherine
                    </Link>
                  </h3>
                  <Link to="/" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">$200</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview">
                    <Link
                      to="/detail"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="btn product-action__addtocart">
                    Add To Cart
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hwh2DIqwbbpUU-jsLEO0Awkd5w6WhRQw48g4hbFs4eXsaybwEOrTx6IHyClnV1DQjw-rx8xXIwNcMxb4HGYyOgrfVw0yYv8pI5Mga9xpFsVsiAptioRwzmawld50dQLEhMgd8brxokUYw~Q0Xc1p5nqMtAC074Sf0NHZ6goEjCv8KYlm3OGofGowRq8T1hW7MiW~1igEA3frClSNKqC3cEgSX5nyOGjqnvQ4GJYuDpqIyci2Mb8PkLMgUMiOWN-1V3H8HK2KyzLoI0Ea1bwHuaZsmufMM-TOjg3lkbqmercIuK6R0qJdc-~i4KHMoM-I1-VwO0LcA76p36sfqmMpNw__"
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="/" className="product__link">
                      Syltherine
                    </Link>
                  </h3>
                  <Link to="/" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">$200</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview">
                    <Link
                      to="/detail"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="btn product-action__addtocart">
                    Add To Cart
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YE6Eb6AmAcG~nBbOG50XLA92IyW1HBVCKLhrJFBWoUdpVPePgm1YHgYJNqjKqOazSzW9XDt7mgo2spBJ-MgBEPOm6ubsK~BfzSKhy7zlksVa-9aysAJ6~VZs-rejxINtZND9sOGziolqjftdlD1y1yagGHBfKWgZiZ-F1otv2-oAmfnZPJWSqSAN2hZ2jtMoM6Y25YxRwnGZZCxMGh~4nx39weBQLov~g6q4P6TmcSoqsj9V0ouc4EoSWd7R5LyPVLwkzZyD6UmGtyiRf6ukwIgpTFTSK18acq~c8NSY~iaK1CIeIgLbGfNzfjYydZzLENshP-GTVdNCtoJcr6a0pw__"
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <Link to="/" className="product__link">
                      Syltherine
                    </Link>
                  </h3>
                  <Link to="/" className="product__category">
                    Stylish cafe chair
                  </Link>
                  <div className="product-price">
                    <span className="product-price__new">500.000</span>
                    <span className="product-price__old">$300</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__quickview">
                    <Link
                      to="/detail"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Quick View
                    </Link>
                  </button>
                  <button className="btn product-action__addtocart">
                    Add To Cart
                  </button>
                  <div className="product-actions-more">
                    <span className="product-action__share">Share</span>
                    <span className="product-action__compare">Compare</span>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Products;

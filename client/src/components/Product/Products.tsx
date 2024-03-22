import { Link } from "react-router-dom";
import { IProduct } from "../../interface";
import "./style.scss";
import "../../_mixin.scss";

function Products({ products }: { products: IProduct[] }) {
  return (
    <div>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">New</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              {products.map((item: IProduct, index: number) => (
                <div className="product-item" key={index}>
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
                      {item.name}
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
              ))}
            </div>
          </div>
          <div
            className="btn"
            style={{ marginTop: 60, marginLeft: 550, display: "flex", gap: 15 }}
          >
            <button
              style={{
                background: "#b88e2f",
                color: "#fff",
                borderRadius: 6,
                border: "1x solid #fff",
                padding: "10px 15px",
              }}
            >
              1
            </button>
            <button
              style={{
                background: "#f9f1e7",
                color: "#000",
                borderRadius: 6,
                border: "1px solid #fff",
                padding: "10px 15px",
              }}
            >
              2
            </button>
            <button
              style={{
                background: "#f9f1e7",
                color: "#000",
                borderRadius: 6,
                border: "1px solid #fff",
                padding: "10px 15px",
              }}
            >
              3
            </button>
            <button
              style={{
                background: "#f9f1e7",
                color: "#000",
                borderRadius: 6,
                border: "1px solid #fff",
                padding: "10px 15px",
              }}
            >
              next
            </button>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Products;

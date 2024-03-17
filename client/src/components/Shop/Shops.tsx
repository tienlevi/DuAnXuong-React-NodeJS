import { Link } from "react-router-dom";
import "./style.scss";
import "../../_mixin.scss";

function Shops() {
  return (
    <section className="shop">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">Shop</h2>
        </div>
        <div className="section-body">
          <div className="shops">
            <div className="shop-item">
              <Link to="/" className="shop__link">
                <img
                  src="https://picsum.photos/id/12/665/500"
                  className="shop__image"
                />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="/" className="shop__link">
                <img
                  src="https://picsum.photos/id/13/665/500"
                  className="shop__image"
                />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="/" className="shop__link">
                <img
                  src="https://picsum.photos/id/14/665/500"
                  className="shop__image"
                />
              </Link>
            </div>
            <div className="shop-item">
              <Link to="/" className="shop__link">
                <img
                  src="https://picsum.photos/id/15/665/500"
                  className="shop__image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shops;

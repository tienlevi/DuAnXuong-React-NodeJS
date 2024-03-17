import "./style.scss";
import "../../_mixin.scss";
import { Link } from "react-router-dom";

function MyCart() {
  return (
    <section className="cart">
      <div className="container">
        <div className="checkout-cart">
          <table border={0}>
            <thead>
              <tr>
                <th />
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGXqfJhdHGKlr9GT-BbRl6NbRc9ItAIE~~IgzV8~xzu7xmsKI0PhYvgaxzRlc-YDr6I0XutICx7KYw-F2Yf0MuI5DmybaAGs~Pouiann6d0hSUSPEZn2zR4gNcQ-8qWdii66n0vDRw~Aewi0GtMVs7zxIjK7XHy4XxwcgbdVLQRAjy20ZDQwl3gWdhu5KKbPezpp3v1o1B2Y4lSb3O9~q4l67ArRpyXJfT1IiPNzfia~jjJ8PilOZRKT38FlBaB-APhDJ5UqAw6wjdXm2uP4PxisbcXXQ85UlPQI4Y6rFfAdxN7r3koLTvZIV4t6rt2WBKhd7l7Y2N22L3y1urfEDQ__"
                    width="111px"
                    height="90px"
                  />
                </td>
                <td>Asgaard sofa</td>
                <td style={{ fontWeight: "bold" }}>25.000.000₫</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td style={{ fontWeight: "bold" }}>25.000.000₫</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="totals-item">
              <p className="totals">Cart Totals:</p>
              <span>25.000.000₫</span>
            </div>
            <div className="totals-item">
              <p className="totals">Total:</p>
              <span
                style={{ fontWeight: "bold", color: "rgba(184, 142, 47, 1)" }}
              >
                25.000.000₫
              </span>
            </div>
            <Link to="/checkout" className="checkout-button">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCart;

import "./style.scss";
import "../../_mixin.scss";

function Pay() {
  return (
    <section className="checkout">
      <div className="container">
        <div className="checkout-container">
          <form className="checkout-form">
            <h1 className="checkout-title">Billing details</h1>
            <div className="checkout-name">
              <div className="checkout-name-children">
                <label className="checkout-label" htmlFor="first-name">
                  First Name
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="first-name"
                  required
                />
              </div>
              <div className="checkout-name-children">
                <label className="checkout-label" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  className="checkout-input"
                  type="text"
                  id="last-name"
                  required
                />
              </div>
            </div>
            <label className="checkout-label" htmlFor="company-name">
              Company Name (Optional)
            </label>
            <input className="checkout-input" type="text" id="company-name" />
            <label className="checkout-label" htmlFor="payment-method">
              Country
            </label>
            <select className="checkout-select" id="payment-method" required>
              <option>Select</option>
              <option value="credit-card">Vietnam</option>
              <option value="paypal">Lao</option>
            </select>
            <label className="checkout-label" htmlFor="company-name">
              Street address
            </label>
            <input className="checkout-input" type="text" id="company-name" />
            <label className="checkout-label" htmlFor="company-name">
              Town / City
            </label>
            <input className="checkout-input" type="text" id="company-name" />
            <label className="checkout-label" htmlFor="company-name">
              Province
            </label>
            <select className="checkout-select" id="payment-method" required>
              <option>Select</option>
              <option value="credit-card">Vietnam</option>
              <option value="paypal">Lao</option>
            </select>
            <label className="checkout-label" htmlFor="company-name">
              ZIP code
            </label>
            <input className="checkout-input" type="text" id="company-name" />
            <label className="checkout-label" htmlFor="company-name">
              Phone
            </label>
            <input className="checkout-input" type="text" id="company-name" />
            <label className="checkout-label" htmlFor="company-name">
              Email address
            </label>
            <input className="checkout-input" type="text" id="company-name" />
          </form>
          <div className="checkout-total">
            <div className="totals-item">
              <p className="totals">Asgaard sofa</p>
              <span>25.000.000₫</span>
            </div>
            <div className="totals-item">
              <p className="totals">Subtotal</p>
              <span>25.000.000₫</span>
            </div>
            <div className="totals-item">
              <p className="totals">Total</p>
              <span
                style={{ fontWeight: "bold", color: "rgba(184, 142, 47, 1)" }}
              >
                25.000.000₫
              </span>
            </div>
            <p className="checkout-button">Check Out</p>
            <div className="payment">
              <input
                type="radio"
                id="dbt"
                name="payment"
                defaultValue="dbt"
                required
              />
              <label htmlFor="dbt">Direct Bank Transfer</label>
              <br />
              <p
                className="payment-description"
                style={{ color: "rgba(159, 159, 159, 1)" }}
              >
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <input type="radio" id="cod" name="payment" defaultValue="cod" />
              <label htmlFor="Direct Bank Transfer">Direct Bank Transfer</label>
              <br />
              <input type="radio" id="cod" name="payment" defaultValue="cod" />
              <label htmlFor="cod">Cash On Delivery</label>
              <br />
              <p className="payment-description">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <p className="checkout-button">Place order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pay;

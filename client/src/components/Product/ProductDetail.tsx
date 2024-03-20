import { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import "../../_mixin.scss";

function ProductDetail({ id }: any) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/${id}`
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="product-container">
      <div className="product-image">
        {/* Replace # with the actual image source */}
        <img src="https://picsum.photos/id/10/1440/500" alt="Product Image" />
      </div>
      <div className="product-info">
        <h2 className="product-name">{data?.name}</h2>
        <p className="product-price">{data?.price}</p>
        <p className="product-reviews">5 Customer Reviews</p>
        <div className="product-description">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended lights for a sound.
        </div>
        <div className="product-size-color">
          <p>
            Size: <span className="select">L</span>
            <span className="">XL</span>
            <span className="">XS</span>
          </p>
        </div>
        <div className="product-color">
          <p style={{ marginTop: 40 }}>color</p>

          <div className="btn" style={{ display: "flex", gap: 15 }}>
            <button
              style={{
                background: "#816DFA",
                color: "#fff",
                borderRadius: "50%",
                height: 20,
                width: 20,
                border: "1px solid #fff",
              }}
            />
            <button
              style={{
                background: "#000",
                color: "#000",
                borderRadius: "50%",
                height: 20,
                width: 20,
                border: "1px solid #fff",
              }}
            />
            <button
              style={{
                background: "#B88E2F",
                color: "#000",
                borderRadius: "50%",
                height: 20,
                width: 20,
                border: "1px solid #fff",
              }}
            />
          </div>
        </div>

        <div className="product-btn">
          <button className="my-button">
            <span className="symbol minus">-</span>
            <span className="label">0</span>
            <span className="symbol plus">+</span>
          </button>
          <button className="add-to-cart">Add To Cart</button>
          <button className="compare">Compare</button>
        </div>
        <div className="product-card">
          <div className="product-card-item">
            <div className="product-card-name">SKU</div>
            <div className="product-card-name">Category</div>
            <div className="product-card-name">Tags</div>
            <div className="product-card-name">Share</div>
          </div>
          <div className="product-card-item">
            <div className="product-card-name">: SS001</div>
            <div className="product-card-name">: Sofas</div>
            <div className="product-card-name">: Sofa, Chair, Home, Shop</div>
            <div className="product-card-name">: Share</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

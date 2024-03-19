import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./style.scss";

function Products() {
  return (
    <>
      <SideBar />
      <main>
        <header className="header-profile">
          <h2>Dashboard</h2>
        </header>
        <div className="overview-profile">
          <table border={1} style={{ borderCollapse: "collapse" }}>
            <thead>
              <td>Id</td>
              <td>Tên sản phẩm</td>
              <td>Giá tiền</td>
              <td>Chức năng</td>
            </thead>
            <tbody>
              <td>1</td>
              <td>Giày đen</td>
              <td>10000</td>
              <td style={{ width: "200px" }}>
                <div style={{ display: "flex" }}>
                  <button>Xóa</button>
                  <Link to={``}>Sửa</Link>
                </div>
              </td>
            </tbody>
          </table>
        </div>
        <footer className="footer-profile">
          © FlixTV.template, 2021. Create by Dmitry Volkov
        </footer>
      </main>
    </>
  );
}

export default Products;

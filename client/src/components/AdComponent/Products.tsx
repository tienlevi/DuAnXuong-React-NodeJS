import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "./style.scss";
import axios from "axios";

function Products() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products/");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id: any) => {
    const confirm = window.confirm("Bạn có muốn xóa không ?");
    if (confirm) {
      try {
        await axios.delete(`http://localhost:8080/api/products/${id}`);
        data.filter((item: any) => item?.id !== id);
        alert("Xóa thàng công");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <SideBar />
      <main>
        <header className="header-profile">
          <h2>Dashboard</h2>
        </header>
        <div className="overview-profile">
          <div className="table">
            <table border={1} style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Tên sản phẩm</td>
                  <td>Giá tiền</td>
                  <td>Ảnh</td>
                  <td>Mô tả</td>
                  <td>Chức năng</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <td>
                      <img src={item?.img} alt="" width={100} />
                    </td>
                    <td>{item?.description}</td>
                    <td style={{ width: "200px" }}>
                      <div style={{ display: "flex" }}>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDelete(item._id)}
                        >
                          Xóa
                        </button>
                        <Link to={`/admin/edit/${item._id}`}>Sửa</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 50,
              marginTop: "10px",
              backgroundColor: "#000",
            }}
          >
            <Link
              to={`/admin/add`}
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Add
            </Link>
          </div>
        </div>
        <footer className="footer-profile">
          © FlixTV.template, 2021. Create by Dmitry Volkov
        </footer>
      </main>
    </>
  );
}

export default Products;

import { Link } from "react-router-dom";
import useProductQuery from "../../hooks/useProductQuery";
import useProductMutation from "../../hooks/useProductMutation";
import SideBar from "./SideBar";
import "./style.scss";
import { IProduct } from "../../interface";

function Products() {
  const { data, isLoading } = useProductQuery();

  const { mutate } = useProductMutation({ action: "Delete" });

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <header className="header-profile">
        <h2>Dashboard</h2>
      </header>
      <SideBar />
      <main>
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
                {data?.map((item: IProduct, index: number) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <td>
                      <img src={item?.image} alt="" width={100} />
                    </td>
                    <td>{item?.description}</td>
                    <td style={{ width: "200px" }}>
                      <div style={{ display: "flex" }}>
                        <button
                          style={{ cursor: "pointer" }}
                          onClick={() => mutate(item)}
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

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SideBar from "./SideBar";

interface Props {
  onAdd: (data: any) => void;
}

function Add({ onAdd }: Props) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onAdd(data);
    navigate("/admin/products");
  };
  return (
    <>
      <SideBar />
      <main>
        <header className="header-profile">
          <h2>Dashboard</h2>
        </header>
        <div className="overview-profile">
          <h1>Thêm sản phẩm</h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="overview-input">
              <label htmlFor="">Tên sản phẩm</label>
              <input type="text" {...register("name", { required: true })} />
            </div>
            <div className="overview-input">
              <label htmlFor="">Giá tiền</label>
              <input type="text" {...register("price", { required: true })} />
            </div>
            <div className="overview-input">
              <label htmlFor="">Ảnh</label>
              <input type="text" {...register("img", { required: true })} />
            </div>
            <div className="overview-input">
              <label htmlFor="">Mô tả</label>
              <input
                type="text"
                {...register("description", { required: true })}
              />
            </div>
            <div className="overview-input">
              <input type="submit" value="Thêm" style={{ cursor: "pointer" }} />
            </div>
          </form>
        </div>
        <footer className="footer-profile">
          © FlixTV.template, 2021. Create by Dmitry Volkov
        </footer>
      </main>
    </>
  );
}

export default Add;

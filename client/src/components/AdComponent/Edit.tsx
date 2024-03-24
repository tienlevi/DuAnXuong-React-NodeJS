import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import SideBar from "./SideBar";
import { useEffect } from "react";
import { getProductById } from "../../api/product";

interface Props {
  onEdit: (id: string, data: any) => void;
}

function Edit({ onEdit }: Props) {
  const { id }: any = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    onEdit(id, data);
    navigate("/admin/products");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response: any = await getProductById(id);
        reset(response.data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <SideBar />
      <main>
        <header className="header-profile">
          <h2>Dashboard</h2>
        </header>
        <div className="overview-profile">
          <h1>Sửa sản phẩm</h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="overview-input">
              <label htmlFor="">Tên sản phẩm</label>
              <input type="text" {...register("name", { required: true })} />
            </div>

            <div className="overview-input">
              <label htmlFor="">Giá tiền</label>
              <input
                type="text"
                {...register("price", {
                  required: true,
                  validate: (value) => !isNaN(value),
                })}
              />
            </div>
            <div className="overview-input">
              <label htmlFor="">Giảm giá</label>
              <input
                type="text"
                {...register("discount", {
                  required: true,
                  validate: (value) => !isNaN(value),
                })}
              />
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
              <input type="submit" value="Sửa" style={{ cursor: "pointer" }} />
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

export default Edit;

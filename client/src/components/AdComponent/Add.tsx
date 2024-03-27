import useProductMutation from "../../hooks/useProductMutation";
import SideBar from "./SideBar";

function Add() {
  const { form, onSubmit, isPending } = useProductMutation({ action: "Add" });

  return (
    <>
      <header className="header-profile">
        <h2>Dashboard</h2>
      </header>
      <SideBar />
      <main>
        <div className="overview-profile">
          <h1>Thêm sản phẩm</h1>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="overview-input">
              <label htmlFor="">Tên sản phẩm</label>
              <input
                type="text"
                {...form.register("name", { required: true })}
              />
            </div>
            <div className="overview-input">
              <label htmlFor="">Danh mục</label>
              <select id="" {...form.register("category", { required: true })}>
                <option value="Áo">Áo</option>
                <option value="Quần">Quần</option>
              </select>
            </div>
            <div className="overview-input">
              <label htmlFor="">Giá tiền</label>
              <input
                type="text"
                {...form.register("price", {
                  required: true,
                  validate: (value) => !isNaN(value),
                })}
              />
            </div>
            <div className="overview-input">
              <label htmlFor="">Giảm giá</label>
              <input
                type="text"
                {...form.register("discount", {
                  required: true,
                  validate: (value) => !isNaN(value),
                })}
              />
            </div>
            <div className="overview-input">
              <label htmlFor="">Ảnh</label>
              <input
                type="text"
                {...form.register("image", { required: true })}
              />
            </div>
            <div className="overview-input">
              <label htmlFor="">Mô tả</label>
              <input
                type="text"
                {...form.register("description", { required: true })}
              />
            </div>
            <div className="overview-input">
              {isPending ? (
                "Dang cap nhat"
              ) : (
                <input
                  type="submit"
                  value="Thêm"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Add;

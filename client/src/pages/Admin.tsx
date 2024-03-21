import { useState } from "react";
import axios from "axios";
import Add from "../components/AdComponent/Add";
import Edit from "../components/AdComponent/Edit";
import Overview from "../components/AdComponent/Overview";
import Products from "../components/AdComponent/Products";
import { toast, ToastContainer } from "react-toastify";

export const Admin = () => {
  return <Overview />;
};

export const ProductPage = () => {
  return <Products />;
};

export const AddPage = () => {
  const [list, setList] = useState<any>([]);

  const handleAdd = async (data: any) => {
    try {
      await axios.post("http://localhost:8080/api/products/", data);
      setList([...list, data]);
      toast.success("Thêm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />

      <Add onAdd={handleAdd} />
    </>
  );
};

export const EditPage = () => {
  const [list, setList] = useState<any>([]);

  const handleEdit = async (id: string, data: any) => {
    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, data);
      setList(list.map((item: any) => (item.id === data.id ? data : item)));
      toast.success("Sửa thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Edit onEdit={handleEdit} />
    </>
  );
};

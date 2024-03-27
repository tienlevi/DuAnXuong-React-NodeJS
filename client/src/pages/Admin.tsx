import { useState } from "react";
import { addProduct, editProduct } from "../config/product";
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
  return (
    <>
      <ToastContainer />

      <Add />
    </>
  );
};

export const EditPage = () => {
  return (
    <>
      <ToastContainer />
      <Edit />
    </>
  );
};

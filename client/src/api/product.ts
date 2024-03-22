import dataUrl from "./axios";

export const getProducts = async () => {
  try {
    const response = await dataUrl.get("/api/products");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string | number) => {
  try {
    const response = dataUrl.get(`/api/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data: any) => {
  try {
    const response = dataUrl.post("/api/products", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string | number) => {
  try {
    const response = dataUrl.delete(`/api/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (id: string | number, data: any) => {
  try {
    const response = dataUrl.put(`/api/products/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

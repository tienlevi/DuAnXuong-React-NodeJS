import Product from "../model/Product.js";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({ slug: req.params.slug });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  try {
    const response = await Product(req.body).save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const response = await Product.findOneAndDelete({ _id: req.params.id });
    if (response.length < 0) {
      res.status(400).json({ message: "Not Found" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (req, res) => {
  try {
    const response = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

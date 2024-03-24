import Product from "../model/Product.js";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete({ _id: req.params.id });
    if (data.length < 0) {
      res.status(400).json({ message: "Not Found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

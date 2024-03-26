import Category from "../model/Category";

export const getCategory = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const data = await Category.findOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (req, res) => {
  try {
    const data = new Category(req.body);
    await data.save();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndDelete({ _id: req.params.id });
    if (data.length < 0) {
      res.status(400).json({ message: "Not Found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (req, res) => {
  try {
    const data = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

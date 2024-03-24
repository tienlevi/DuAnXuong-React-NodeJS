import mongoose from "mongoose";

const Category = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String, unique: true, lowercase: true },
  },
  { timestamps: true, versionKey: false }
);

const CategorySchema = mongoose.model("Category", Category);

export default CategorySchema;

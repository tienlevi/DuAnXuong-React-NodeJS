import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    img: { type: String },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", productSchema);

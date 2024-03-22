import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
    // slug: { type: String, unique: undefined },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    price: { type: Number, required: true, default: 0 },
    img: { type: String },
    description: { type: String },
    discount: { type: Number, default: 0 },
    feature: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", productSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "../upload/default-avatar.jpeg",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Users", UserSchema);

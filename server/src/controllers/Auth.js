import { SignUpSchema } from "../schemas/Auth.js";
import UserSchema from "../model/User.js";

export const SignUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const { error } = SignUpSchema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      console.log(errors);
      return res.status(400).json({ message: "Mật khẩu là bắt buộc" });
    }
    const exitsUser = await UserSchema.findOne({ email });
    if (exitsUser) {
      return res.json({ message: "email ton tai" });
    }
    const user = await UserSchema.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

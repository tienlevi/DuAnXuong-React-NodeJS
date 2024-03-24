import UserSchema from "../model/User.js";
import Joi from "joi";

export const SignUpSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "name là bắt buộc",
    "string.empty": "trường name không được để trống",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Không đúng định dạng email",
    "string.empty": "Bắt buộc nhập",
    "any.required": "email không được để trống",
  }),
  password: Joi.string().min(6).required().messages({
    "password.empty": "mật khẩu không được để trống",
    "password.min": "Mật khẩu tối thiểu 6 ký tự",
    "any.required": "mật khẩu không được để trống",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Mật khẩu không khớp",
    "string.empty": "Mật khẩu không được để trống",
    "any.required": "Mật khẩu là bắt buộc",
  }),
  avatar: Joi.string().uri().messages({
    "string.uri": "Trường Avatar phải là đường dẫn hợp lệ",
  }),
});

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

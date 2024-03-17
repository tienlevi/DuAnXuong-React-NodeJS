import Joi from "joi";

export const SignUpSchema = Joi.object({
  name: Joi.string(),
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
});

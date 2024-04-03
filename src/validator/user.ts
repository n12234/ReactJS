import Joi from "joi";

export const LoginValidate = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email không được để trống",
        "string.email": "Email không hợp lệ",
        "any.required": "Email là trường bắt buộc",
      }),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .messages({
        "string.empty": "Mật khẩu không được để trống",
        "string.pattern.base": "Mật khẩu phải chứa ít nhất 3 ký tự chữ hoặc số",
        "any.required": "Mật khẩu là trường bắt buộc",
      }),
  });

 export const RegisterValidate = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required().messages({
      'string.empty': 'Tên người dùng không được để trống',
      'string.alphanum': 'Tên người dùng chỉ được chứa ký tự chữ và số',
      'string.min': 'Tên người dùng phải có ít nhất 3 ký tự',
      'string.max': 'Tên người dùng không được vượt quá 30 ký tự',
      'any.required': 'Tên người dùng là trường bắt buộc'
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email không được để trống',
      'string.email': 'Email không hợp lệ',
      'any.required': 'Email là trường bắt buộc'
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
      'string.empty': 'Mật khẩu không được để trống',
      'string.pattern.base': 'Mật khẩu phải chứa ít nhất 3 ký tự chữ hoặc số',
      'any.required': 'Mật khẩu là trường bắt buộc'
    }),
    confirmPassword: Joi.valid(Joi.ref('password')).required().messages({
      'any.only': 'Mật khẩu không khớp',
      'any.required': 'Vui lòng xác nhận mật khẩu'
    })
  }).with('password', 'confirmPassword');
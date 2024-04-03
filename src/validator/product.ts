import Joi from "joi";

export const ProductValidate = Joi.object({
    title: Joi.string().required().min(3).empty().messages
    ({
      'string.empty':'Tên sản phẩm không được để trống',
      'string.min': 'Tên sản phẩm phải có ít nhất 3 ký tự',
      'any.required': 'Tên sản phẩm là trường bắt buộc',
    }),
    price: Joi.number().positive().required().empty().messages({
      'number.base': 'Giá phải là một số',
      'number.empty':'Giá không được để trống',
      'number.positive': 'Giá phải là số dương',
      'any.required': 'Giá là trường bắt buộc'
    }),
    image: Joi.string().required().empty().messages({
      'string.base': 'Ảnh phải là một loại văn bản',
      'string.empty':'Ảnh sản phẩm không được để trống',
    }),
    category: Joi.string().required().empty().messages({
      'string.base': 'Danh mục phải là một loại văn bản',
      'string.empty':'Danh mục không được để trống',
      'any.required':'Danh mục là trường bắt buộc'
    }),
    description: Joi.string().required().empty().messages({
      'string.base': 'Danh mục phải là một loại văn bản',
      'string.empty':'Danh mục không được để trống',
      'any.required':'Danh mục là trường bắt buộc'
    }),
  });

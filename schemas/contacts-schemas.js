import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
    "string.empty": "name can not be empty ",
  }),
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
    "string.empty": "email can not be empty ",
  }),
  phone: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.empty": "phone can not be empty ",
  }),
});

export default { contactAddSchema };

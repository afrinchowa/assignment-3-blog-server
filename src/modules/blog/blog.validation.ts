import Joi from 'joi';

export const createBlogValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).optional(),
});

export const updateBlogValidation = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
});

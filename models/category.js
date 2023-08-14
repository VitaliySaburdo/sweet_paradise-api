const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const categorySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

categorySchema.post("save", handleMongooseError);

const Category = model("category", categorySchema);

const addCategorySchemas = Joi.object({
  category_id: Joi.number().required(),
  name: Joi.string().required(),
});
const changeCategorySchemas = Joi.object({
  category_id: Joi.number().required(),
  name: Joi.string().required(),
});

const schemas = {
  addCategorySchemas: addCategorySchemas,
  changeCategorySchemas: changeCategorySchemas,
};

module.exports = { Category, schemas };

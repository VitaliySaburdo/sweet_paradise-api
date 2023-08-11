const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

// Mongoose schemas
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category_id: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const categorySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

productSchema.post("save", handleMongooseError);
categorySchema.post("save", handleMongooseError);

const Product = model("product", productSchema);
const Category = model("category", categorySchema);

// Joi schemas
const addProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  category_id: Joi.number().required(),
  img: Joi.string().required(),
});
const changeProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  category_id: Joi.string().required(),
  img: Joi.string().required(),
});
const addCategorySchemas = Joi.object({
  category_id: Joi.number().required(),
  name: Joi.string().required(),
});
const changeCategorySchemas = Joi.object({
  category_id: Joi.number().required(),
  name: Joi.string().required(),
});

const schemas = {
  addProductSchema: addProductSchema,
  changeProductSchema: changeProductSchema,
  addCategorySchemas: addCategorySchemas,
  changeCategorySchemas: changeCategorySchemas,
};

module.exports = { Product, Category, schemas };

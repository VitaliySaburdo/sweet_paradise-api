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
    weight: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

// Joi schemas
const addProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  weight: Joi.string().required(),
  category_id: Joi.number().required(),
  img: Joi.string().required(),
  ingredients: Joi.string().required(),
});
const changeProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  weight: Joi.string().required(),
  category_id: Joi.string().required(),
  img: Joi.string().required(),
  ingredients: Joi.string().required(),
});

const upDateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addProductSchema: addProductSchema,
  changeProductSchema: changeProductSchema,
  upDateFavoriteSchema: upDateFavoriteSchema,
};

module.exports = { Product, schemas };

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
  category_id: Joi.number().required(),
  img: Joi.string().required(),
});
const changeProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  category_id: Joi.string().required(),
  img: Joi.string().required(),
});

const schemas = {
  addProductSchema: addProductSchema,
  changeProductSchema: changeProductSchema,
};

module.exports = { Product, schemas };

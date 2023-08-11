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

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

// Joi schemas
const addSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  category_id: Joi.string().required(),
  img: Joi.string().required(),
});
const changeSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  category_id: Joi.string().required(),
  img: Joi.string().required(),
});

const schemas = {
  addSchema: addSchema,
  changeSchema: changeSchema,
};

module.exports = { Product, schemas };

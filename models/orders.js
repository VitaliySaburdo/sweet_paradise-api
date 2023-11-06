const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderItemSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
});

const orderSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },
  orderNumber: {
    type: Number,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  items: [orderItemSchema],
});

const Orders = model("orders", orderSchema);

const addOrderSchema = Joi.object({
  owner: Joi.string().required(),
  totalPrice: Joi.number().required(),
  items: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        favorite: Joi.boolean().default(false),
        img: Joi.string().required(),
        ingredients: Joi.string().required(),
        quantity: Joi.number().required(),
        totalPrice: Joi.number().required(),
        weight: Joi.number().required(),
      })
    )
    .required(),
});

const schemas = {
  addOrderSchema,
};

module.exports = { Orders, schemas };

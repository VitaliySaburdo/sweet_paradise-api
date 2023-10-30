const { Schema, model } = require("mongoose");

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
    ref: "Category",
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
    ref: "User",
    required: true,
  },
  items: [orderItemSchema],
});

const Order = model("Order", orderSchema);

module.exports = { Order };

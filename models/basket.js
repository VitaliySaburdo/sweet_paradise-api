const { Schema, model } = require("mongoose");

const basketSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const basketDeviseSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const Basket = model("Basket", basketSchema);
const BasketDevise = model("BasketDevise", basketDeviseSchema);

module.exports = { Basket, BasketDevise };

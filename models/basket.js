const { Schema, model } = require("mongoose");

const basketSchema = new Schema({
  userId: {
    type: String,
    require: true,
    ref: "user",
  },
});

const basketDeviseSchema = new Schema({
  userId: {
    type: String,
  },
});

const Basket = model("Basket", basketSchema);
const BasketDevise = model("BasketDevise", basketDeviseSchema);

module.exports = { Basket, BasketDevise };

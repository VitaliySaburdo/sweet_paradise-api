const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const basketSchema = new Schema({
  id: {
    type: Number,
  },
});

const basketDeviseSchema = new Schema({
  id: {
    type: Number,
  },
});

const Basket = model("Basket", basketSchema);
const BasketDevise = model("BasketDevise", basketDeviseSchema);

module.exports = { Basket, BasketDevise };

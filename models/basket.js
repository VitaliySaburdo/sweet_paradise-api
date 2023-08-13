const { Schema, model } = require("mongoose");

const basketSchema = new Schema({
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
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


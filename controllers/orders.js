const { HttpError, ctrlWrapper } = require("../helpers");
const { Orders } = require("../models/orders");

const createOrders = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Orders.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  createOrders: ctrlWrapper(createOrders),
};

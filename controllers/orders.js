const { HttpError, ctrlWrapper } = require("../helpers");
const { Orders } = require("../models/orders");
const { Category } = require("../models/category");

const createOrders = async (req, res) => {
  const { _id: owner } = req.user;
  const { items } = req.body;
  for (const item of items) {
    const { category } = item;
    const currentCategory = await Category.findById(category);
    if (!currentCategory) {
      throw HttpError(401, "Category not found");
    }
  }
  const result = await Orders.create({ ...req.body, owner });
  res.status(201).json(result);
};

const getAllOrders = async (req, res) => {
  const { owner } = req.body;
  const result = await Orders.find({ owner });
  res.json(result);
};

module.exports = {
  createOrders: ctrlWrapper(createOrders),
  getAllOrders: ctrlWrapper(getAllOrders),
};

const { HttpError, ctrlWrapper } = require("../helpers");
const { Orders } = require("../models/orders");
const { Category } = require("../models/category");

const createOrders = async (req, res) => {
  const { _id: owner } = req.user;

  const lastOrder = await Orders.findOne({}, {}, { sort: { orderNumber: -1 } });
  const orderNumber = lastOrder ? lastOrder.orderNumber + 1 : 1;

  const { items } = req.body;
  for (const item of items) {
    const { category } = item;
    const currentCategory = await Category.findById(category);
    if (!currentCategory) {
      throw HttpError(401, "Category not found");
    }
  }
  const result = await Orders.create({ ...req.body, owner, orderNumber });
  res.status(201).json(result);
};

const getAllOrders = async (req, res) => {
  const { id } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const totalOrders = await Orders.countDocuments({ owner: id });
  const totalPages = Math.ceil(totalOrders / limit);
  let result;

    const skip = (totalPages - page) * limit;
    result = await Orders.find({ owner: id }).skip(skip).limit(limit);

  res.json(result);
};

module.exports = {
  createOrders: ctrlWrapper(createOrders),
  getAllOrders: ctrlWrapper(getAllOrders),
};

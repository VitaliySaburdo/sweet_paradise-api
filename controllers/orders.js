const { HttpError, ctrlWrapper } = require("../helpers");

const createOrders = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Category.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = {
  createOrders: ctrlWrapper(createOrders),
};

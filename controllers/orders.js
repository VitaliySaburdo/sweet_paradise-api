const { Orders } = require("../models/orders");
("../static");

const { HttpError, ctrlWrapper } = require("../helpers");

const createOrders = async (req, res) => {
  const { _id: owner } = req.user;
  const { img } = req.body;
  const imagePath = `../static/${img}`;
  const result = await Category.create({ ...req.body, img: imagePath, owner });
  res.status(201).json(result);
};

module.exports = {
  createOrders: ctrlWrapper(createOrders),
};

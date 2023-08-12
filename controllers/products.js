const { Products } = require("../models/product");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllProducts = async (req, res) => {
  const { _id: owner } = req.user;
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 20;
  const favorite = req.query.favorite;
  const skip = page * limit;
  if (favorite) {
    const result = await Products.find({ owner, favorite }, "", {
      skip,
      limit,
    }).populate("owner", "name email");
    res.json(result);
  }
  const result = await Products.find({ owner }, "", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const result = await Products.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, `Product with id ${id} not found`);
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Products.create({ ...req.body, owner });
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Products.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const changeContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Products.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Product with id ${id} not found`);
  }
  res.status(200).json(result);
};



module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductsById: ctrlWrapper(getProductsById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  changeContactById: ctrlWrapper(changeContactById),

};

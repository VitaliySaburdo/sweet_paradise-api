const { Category } = require("../models/category");

const { HttpError, ctrlWrapper } = require("../helpers");

const createCategory = async (req, res) => {
  const { _id: owner } = req.user;
  const { name } = req.body;
  const category = await Category.findOne({ name });
  if (category) {
    throw HttpError(409, `You already have a category ${category}`);
  }
  const result = await Category.create({ ...req.body, owner });
  res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await Category.find();
  res.json(result);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, `Product with id ${id} not found`);
  }
  res.json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const changeProductById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Product with id ${id} not found`);
  }
  res.status(200).json(result);
};

module.exports = {
  createCategory: ctrlWrapper(createCategory),
  //   getAllProducts: ctrlWrapper(getAllProducts),
  //   getProductsById: ctrlWrapper(getProductsById),
  //   deleteProduct: ctrlWrapper(deleteProduct),
  //   changeProductById: ctrlWrapper(changeProductById),
};

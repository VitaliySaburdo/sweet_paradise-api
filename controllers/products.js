const uuid = require("uuid");
const { Product } = require("../models/product");
const path = require("path");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 6;
  const favorite = req.query.favorite;
  const skip = page * limit;
  if (favorite) {
    const { _id: owner } = req.user;
    const result = await Product.find({ owner, favorite }, "", {
      skip,
      limit,
    }).populate("owner", "name email");
    res.json(result);
  }
  const result = await Product.find({}, "", {
    skip,
    limit,
  }).populate("owner", "name email");
  res.json(result);
};

const getProductsByCategories = async (req, res) => {
  const categoryID = req.params.id;

  const result = await Product.find({ category: categoryID });
  if (!result) {
    throw HttpError(404, `Category with id ${id} not found`);
  }
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

const createProduct = async (req, res) => {
  const { _id: owner } = req.user;
  const { name } = req.body;
  const product = await Product.findOne({ name });
  if (product) {
    throw HttpError(409, `You already have a ${name} product`);
  }
  const { img } = req.files;
  
  let fileName = uuid.v4() + ".jpeg";
  img.mv(path.resolve(__dirname, "..", "static", fileName));
  const result = await Product.create({ ...req.body, img: fileName, owner });
  res.status(201).json(result);
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

const upDateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Product with id ${id} not found`);
  }
  res.status(200).json(result);
};

module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductsByCategories: ctrlWrapper(getProductsByCategories),
  getProductsById: ctrlWrapper(getProductsById),
  createProduct: ctrlWrapper(createProduct),
  deleteProduct: ctrlWrapper(deleteProduct),
  changeProductById: ctrlWrapper(changeProductById),
  upDateFavorite: ctrlWrapper(upDateFavorite),
};

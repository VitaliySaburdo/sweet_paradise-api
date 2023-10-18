const { Category } = require("../models/category");

const { HttpError, ctrlWrapper } = require("../helpers");

const createCategory = async (req, res) => {
  const { _id: owner } = req.user;
  const { name } = req.body;
  const category = await Category.findOne({ name });
  if (category) {
    throw HttpError(409, `You already have a category ${category}`);
  }
  const { img } = req.files;
  let fileName = uuid.v4() + ".png";
  img.mv(path.resolve(__dirname, "..", "static", fileName));
  const result = await Category.create({ ...req.body,  img: fileName, owner });
  res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await Category.find();
  res.json(result);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, `Category with id ${id} not found`);
  }
  res.json(result);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({ message: `Category ${result} deleted` });
};

const changeCategoryById = async (req, res) => {
  const { id } = req.params;
  const result = await Category.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Category with id ${id} not found`);
  }
  res.status(200).json(result);
};

module.exports = {
  createCategory: ctrlWrapper(createCategory),
    getCategories: ctrlWrapper(getCategories),
    getCategoryById: ctrlWrapper(getCategoryById),
    deleteCategory: ctrlWrapper(deleteCategory),
    changeCategoryById: ctrlWrapper(changeCategoryById),
};

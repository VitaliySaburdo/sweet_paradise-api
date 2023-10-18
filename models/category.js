const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

categorySchema.post("save", handleMongooseError);

const Category = model("category", categorySchema);

const addCategorySchemas = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
});
const changeCategorySchemas = Joi.object({
  name: Joi.string().required(),
});

const schemas = {
  addCategorySchemas: addCategorySchemas,
  changeCategorySchemas: changeCategorySchemas,
};

module.exports = { Category, schemas };

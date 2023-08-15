const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

let count = 1;

const categorySchema = new Schema(
  {
    _id: {
      type: Number,
      default: () => {
        count++;
        return count;
      },
      unique: true,
      required: true,
    },
    name: { type: String, required: true },
  },
  { versionKey: false }
);

categorySchema.post("save", handleMongooseError);

const Category = model("category", categorySchema);

const addCategorySchemas = Joi.object({
  name: Joi.string().required(),
});
const changeCategorySchemas = Joi.object({
  name: Joi.string().required(),
});

const schemas = {
  addCategorySchemas: addCategorySchemas,
  changeCategorySchemas: changeCategorySchemas,
};

module.exports = { Category, schemas };

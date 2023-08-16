const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/categories");

const { isValidId, isAdmin, authenticate } = require("../../middlewares");

router.post("/", authenticate, isAdmin, ctrl.createCategory);

router.get("/", ctrl.getCategories);

router.get("/:id", authenticate, isValidId, ctrl.getCategoryById);

router.delete("/:id", authenticate, isValidId, isAdmin, ctrl.deleteCategory);

router.put("/:id", authenticate, isValidId, isAdmin, ctrl.changeCategoryById);

module.exports = router;

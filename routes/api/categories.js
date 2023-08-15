const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/categories");

const { isValidId, isAdmin, authenticate } = require("../../middlewares");

router.post("/", authenticate, isAdmin, ctrl.createCategory);

// router.get("/", authenticate, ctrl.getAllProducts);

// router.get("/:id", authenticate, isValidId, ctrl.getProductsById);

// router.delete("/:id", authenticate, isValidId, isAdmin, ctrl.deleteProduct);

// router.put("/:id", authenticate, isValidId, isAdmin, ctrl.changeProductById);

module.exports = router;

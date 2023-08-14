const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products");

const {
  isValidId,
  isAdmin,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllProducts);

router.get("/:id", authenticate, isValidId, ctrl.getProductsById);

router.post(
  "/",
  authenticate,
  isAdmin,
  ctrl.createProduct
);

router.delete("/:id", authenticate, isValidId, isAdmin, ctrl.deleteProduct);

router.put("/:id", authenticate, isValidId, isAdmin, ctrl.changeProductById);

module.exports = router;

// NsIjAOnMmoCVEP0T

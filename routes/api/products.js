const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products");

const {
  isValidId,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllProducts);

router.get("/:id", authenticate, isValidId, ctrl.getProductsById);

router.post(
  "/",
  authenticate,
  ctrl.createProduct
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteProduct);

router.put("/:id", authenticate, isValidId, ctrl.changeProductById);

module.exports = router;

// NsIjAOnMmoCVEP0T

const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products");

const { schemas } = require("../../models/product");

const {
  isValidId,
  isAdmin,
  authenticate,
  validatePatchBody,
} = require("../../middlewares");

router.get("/", ctrl.getAllProducts);

router.get("/category/:id", ctrl.getProductsByCategories);

// router.get("/:id", isValidId, ctrl.getProductsById);

router.post("/", authenticate, isAdmin, ctrl.createProduct);

router.delete("/:id", authenticate, isValidId, isAdmin, ctrl.deleteProduct);

router.put("/:id", authenticate, isValidId, isAdmin, ctrl.changeProductById);

router.patch(
  "/favorite/:id",
  isValidId,
  validatePatchBody(schemas.upDateFavoriteSchema),
  ctrl.upDateFavorite
);

module.exports = router;

// NsIjAOnMmoCVEP0T

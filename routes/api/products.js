const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products");

const {
  validateCreateBody,
  isValidId,
  authenticate,
} = require("../../middlewares");

router.get("/", authenticate, ctrl.getAllProducts);

router.get("/:id", authenticate, isValidId, ctrl.getProductsById);

router.post(
  "/",
  authenticate,
  ctrl.createContact
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

router.put("/:id", authenticate, isValidId, ctrl.changeContactById);

module.exports = router;

// NsIjAOnMmoCVEP0T

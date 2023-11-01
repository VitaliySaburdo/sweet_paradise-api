const express = require("express");

const router = express.Router();

const { isUser, authenticate } = require("../../middlewares");

const ctrl = require("../../controllers/orders");

router.post("/", authenticate, isUser, ctrl.createOrders);

router.get("/:id", authenticate, isUser, ctrl.getAllOrders);

module.exports = router;

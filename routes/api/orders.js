const express = require("express");

const router = express.Router();

const { isUser, authenticate } = require("../../middlewares");

const ctrl = require("../../controllers/orders");

router.post("/", authenticate, isUser, ctrl.createOrders);

module.exports = router;

const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

// signup
router.post("/signup", validateBody(schemas.registerSchema), ctrl.register);

// signing
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", ctrl.getCurrent);

router.post("/logout", ctrl.logout);

module.exports = router;

const validateBody = require("./validation");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
const isAdmin = require("./isAdmin");
const isUser = require("./isUser");
const validatePatchBody = require("./validatePatchBody");

module.exports = {
  validateBody,
  authenticate,
  isValidId,
  isAdmin,
  isUser,
  validatePatchBody,
};

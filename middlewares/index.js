const validateBody = require("./validation");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
const isAdmin = require("./isAdmin");

module.exports = {
  validateBody,
  authenticate,
  isValidId,
  isAdmin
};

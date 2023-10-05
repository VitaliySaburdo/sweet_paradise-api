const validateBody = require("./validation");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
const isAdmin = require("./isAdmin");
const validatePatchBody = require("./validatePatchBody");
const upload = require("./uploadImg");

module.exports = {
  validateBody,
  authenticate,
  isValidId,
  isAdmin,
  validatePatchBody,
  upload,
};

const { HttpError } = require("../helpers");

const validatePatchBody = (schema) => {
    const func = (req, res, next) => {
        const { favorite } = req.body;
    if (!favorite) {
      throw HttpError(400, "missing field favorite");
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validatePatchBody;
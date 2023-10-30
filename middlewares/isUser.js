const { HttpError } = require("../helpers");

const isUser = (req, res, next) => {
  if (req.user && req.user.role === "USER") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "You not authorized to perform this action" });
  }
};

module.exports = isUser;

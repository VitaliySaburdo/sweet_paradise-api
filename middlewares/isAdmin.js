const { HttpError } = require("../helpers");

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'ADMIN') {
        next();
    } else {
        return res.status(403).json({message: 'You not authorized to perform this action'})
}
};

module.exports = isAdmin;
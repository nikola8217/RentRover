const { UnauthenticatedError } = require('../errors');

const admin = (req, res, next) => {
    if (req.user && req.user === "admin") {
        next()
    } else {
        throw new UnauthenticatedError('Not authorized as admin');
    }
}

module.exports = admin 
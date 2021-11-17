const jwt = require("jsonwebtoken");
const User = require("../api/models/user.model");
const setError = require("../utils/error.util")

const isAuth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return next(setError(404, 'Unauthorized'));
        }
        const parsedToken = token.replace('Bearer', '');
        const validToken = jwt.verify(parsedToken, process.env.JWT_SECRET);
        const userLogued = await User.findById(validToken.id);

        userLogued.password = null;
        req.user = userLogued;
        next();

    } catch (error) {
        return next(error);
    }
}

module.exports = { isAuth };
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate("book")
        return res.json({
            status: 200,
            message: 'Todo Ok',
            data: { users: users }
        });
    } catch (error) {
        return next(error);
    }
}

const register = async (res, req, next) => {
    try {
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.name;
        newUser.password = req.body.name;
        newUser.books = [];

        const userDb = await newUser.save();

        return res.json({
            status: 201,
            message: "Todo Ok, has creado un usuario",
            data: { user: userDb.name }
        });
    } catch (error) {
        return next(error);
    }
}

const login = async (res, req, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email });
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },
                req.app.get("secretKey"),
                { expiresIn: "1h" }
            );
            return res.json({
                status: 201,
                message: "Todo Ok, has logueado tu usuario",
                data: { user: userInfo, token: token }
            });
        } 
    } catch (error) {
        return next(error);
    }
}

const logout = async (res, req, next) => {
    try {
        return res.json({
            status: 201,
            message: "Todo Ok, has deslogueado tu usuario",
            token: null
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = { getAllUsers, register, login, logout };
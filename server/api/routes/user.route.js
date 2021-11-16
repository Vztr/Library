const express = require ("express");

const router = express.Router();

const { getAllUsers, register, login, logout } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
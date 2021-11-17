const express = require("express"); 
const router = express.Router(); 
const { isAuth } = require("../../middlewares/auth.middleware"); 

const { createBook, getAllBooks, getBookById } = require("../controllers/book.controller"); 

router.post("/create", [isAuth], createBook); 
router.get("/", getAllBooks); 
router.get("/:bookId", [isAuth], getBookById); 


module.exports = router; 
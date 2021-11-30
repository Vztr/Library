const express = require("express"); 
const router = express.Router(); 
const { isAuth } = require("../../middlewares/auth.middleware"); 
/* const fileMiddleware = require("../../middlewares/file.middleware"); */

const { 
    createBook,
    getAllBooks,
    getBookById,
    deleteBook
} = require("../controllers/book.controller"); 

router.post("/create", [isAuth], createBook); 
router.get("/", getAllBooks); 
router.delete("/delete/:bookId", [isAuth], deleteBook);
router.get("/:bookId", [isAuth], getBookById); 


module.exports = router; 
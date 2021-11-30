const Book = require("../models/book.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const createBook = async (req, res, next) => {
    try {
        const newBook = new Book();
        newBook.name = req.body.name;
        newBook.author = req.body.author;
        newBook.cover = req.body.cover;

        const bookDb = await newBook.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { book: bookDb.name }
        })
    } catch (error) {
        return next(error);
    }
  }

const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find()/* .populate("books") */;

        return res.json({
            status: 200,
            message: "Todo Ok, has conseguido todos los libros",
            data: { books: books }
        })

    } catch (error) {
        return next(error)
    }
}

const getBookById = async (req, res, next) => {
    try {
        const { bookId } = req.params;
        const bookById = await Book.findById(bookId);

        return res.json({
            status: 200,
            message: "Todo Ok, has conseguido el libro por su ID",
            data: { book: bookById }
        })
    } catch (error) {
        return next(error)
    }
}

const deleteBook = async (req, res, next) => {
    try {
        const {bookId} = req.params;
        await Book.findByIdAndDelete(bookId);
        return res.json ({
            status: 200,
            message: "Libro borrado con éxito"
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createBook, getAllBooks, getBookById, deleteBook };
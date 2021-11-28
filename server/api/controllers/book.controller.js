const Book = require("../models/book.model");
const fs = require ("fs");


const createBook = async (req, res, next) => {
    try {
        let book = req.file ? req.file.url: null;
        const newBook = new Book();
        newBook.name = req.body.name;
        newBook.author = req.body.author;
        newBook.book = book;
        newBook.cover = req.body.cover;
        newBook.year = req.body.year;
        newBook.editorial = req.body.editorial;

        const bookDb = await newBook.save();

        return res.json({
            status: 201,
            message: "Todo Ok, has subido tu poster",
            data: { name: bookDb.name }
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
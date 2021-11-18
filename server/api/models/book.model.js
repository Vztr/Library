const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

 
const BookSchema = new Schema( 
    { 
        book: { type: String, require: true },
        name: { type: String, require: true }, 
        author: { type: String, require: true }, 
        year: { type: Number, require: true }, 
        editorial: { type: String, require: true }, 
        cover: { type: String, require: true }
    }, 
); 

const Book = mongoose.model("book", BookSchema); 

module.exports = Book; 
import React, { useState, useEffect } from "react";
import getBooks from "../../api/fetch_books";

const Gallery = () => {
    useEffect(() => {
        formatCovers();
    }, []);

    const [books, setBooks] = useState([]);

    const formatCovers = async () => {
        const bookdb = await getBooks();
        console.log(bookdb);
        setBooks(bookdb.data.books);
    };

    return (
        <div>
            <ul>
                {books.map((book) => {
                    return (
                        <ul className="List_books" key={JSON.stringify(book)}>
                            <li className="List_books_item">
                                <img src={book.cover} alt="Cover" />
                                <h4>{book.name}</h4>
                                <h4>{book.year}</h4>
                                <a  href={book.book}>PDF</a>
                            </li>
                        </ul>
                    );
                })}
            </ul>
        </div>
    );
};

export default Gallery;
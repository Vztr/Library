import React, { useState, useEffect } from "react";
import getBooks from "../../api/fetch_books";
import "../Gallery/Gallery.css"

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
        <div className="Container">
            <h2>Nuestros libros</h2>
            <ul className="List_books" >
                {books.map((book) => {
                    return (
                        /* <ul className="List_books" key={JSON.stringify(book)}> */
                            <li className="List_poster_item" key={JSON.stringify(book)}>
                                <img src={book.cover} alt="Cover"/>
                                <h4>{book.name}</h4>
                                <p>{book.author}</p>
                                <a href={book.cover}>Download</a>
                            </li>
                        /* </ul> */
                    );
                })}
            </ul>
        </div>
    );
};

export default Gallery;
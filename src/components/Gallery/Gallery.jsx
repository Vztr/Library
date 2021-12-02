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
        <div className="Containe_gallery">
            <h2>Nuestros libros</h2>
            <ul className="List_posters" >
                {books.map((book) => {
                    return (
                        /* <ul className="List_books" key={JSON.stringify(book)}> */
                            <li className="List_poster_item" key={JSON.stringify(book)}>
                                <img  className="poster_img" src={book.cover} alt="Cover"/>
                                <h4 className="title_img">{book.name}</h4>
                                <p className="author_img">{book.author}</p>
                                <a className="download_button" target="_blank" href={book.cover} download="cover.jpg">Download</a>
                            </li>
                        /* </ul> */
                    );
                })}
            </ul>
        </div>
    );
};

export default Gallery;
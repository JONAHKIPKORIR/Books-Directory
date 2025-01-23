import React, { useState } from "react";
import { addBook } from "../services/bookServices";

const BookForm =({ onBookAdded }) =>{
    const [title, setTitle] =useState('');
    const [author, setAuthor] =useState('');
    const [genre, setGenre] =useState('');
    const [publishedYear, setPublishedYear]= useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook ={title,author,genre,publishedYear};
        const savedBook = await addBook(newBook);
        onBookAdded(savedBook);
        setTitle('');
        setAuthor('');
        setGenre('');
        setPublishedYear();

    };

    return (

        <form onSubmit={handleSubmit}>
            <h2>Add a New Book</h2>
            <div>
                <label>Title:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Author:</label>
                <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Genre:</label>
                <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Published Year:</label>
                <input
                type="text"
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
                required
                />
            </div>
            <button type="submit">Add Book</button>

        </form>
    );

};

export default BookForm;
import React from "react";
const BookList =({books,onDelete}) => {
    if (!Array.isArray(books)) {
        console.error("Expected books to be an array, but got:", books);
        return <p>No books available</p>;
    }
    return (

        <div>
            <h2>Books List</h2>
            <ul>
                {books.map((book,index) =>(
                    <li key={index}>
                     <strong>{book.title}</strong> by {book.author} ({book.publishedYear}) - {book.genre}
                        <button onClick={() =>onDelete(book._id)}>Delete</button>
                    </li>
            ))}
            </ul>
           

        </div>
    );
}

export default BookList;
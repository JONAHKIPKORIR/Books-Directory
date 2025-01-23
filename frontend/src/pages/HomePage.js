import React, { useEffect, useState } from 'react';
import {fetchBooks,deleteBook} from '../services/bookServices';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';


const HomePage= () =>{
    const [books,setBooks] =useState([]);

// Fetch Books from the server
useEffect(() => {
    const getBooks= async () =>{
        const booksData= await fetchBooks();
        setBooks(booksData);
    };
    getBooks();
},[]);

// Add a new book to the list
const handleBookAdded= (newBook) => {
    setBooks((prevBooks) => {
    console.log('Previous Books:', prevBooks); // Log previous state
    return  Array.isArray(prevBooks) ? [...prevBooks,newBook] : [newBook];
    });
};
// Delete a book frpm list
const handleDelete= async (id) => {
    await deleteBook(id);
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
}

return (
    <div>
        <h1>
            Books Directory
        </h1>
        <BookForm onBookAdded={handleBookAdded} />
        <BookList books={books} onDelete={handleDelete} />
    </div>

);

}
export default HomePage;
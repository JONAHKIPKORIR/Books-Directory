import React, { useState } from "react";
import {TextField,Button,Box} from '@mui/material';
import {toast} from 'react-toastify';
import { addBook } from "../services/bookServices";

const BookForm =({ onBookAdded }) =>{
    // const [title, setTitle] =useState('');
    // const [author, setAuthor] =useState('');
    // const [genre, setGenre] =useState('');
    // const [publishedYear, setPublishedYear]= useState('');

    const [formData,setFormData] =useState({
        title:'',
        author:'',
        genre:'',
        publishedYear:'',
    });
    const handleChange =(e) =>{
        const {name,value} =e.target;
        setFormData({ ...formData, [name] : value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBook =await addBook(formData);
            onBookAdded(newBook);
            toast.success('Book Added Succesfully');
            setFormData({title:'', author:'', genre:'', publishedYear:''})
            // const newBook ={title,author,genre,publishedYear};
            // const savedBook = await addBook(newBook);
            // onBookAdded(savedBook);
            // setTitle('');
            // setAuthor('');
            // setGenre('');
            // setPublishedYear();

            
        } catch (error) {
            toast.error('Failed to Add Book.Please try again later')
        }
        
    };

    return (

        // <form onSubmit={handleSubmit}>
        //     <h2>Add a New Book</h2>
        //     <div>
        //         <label>Title:</label>
        //         <input
        //         type="text"
        //         value={title}
        //         onChange={(e) => setTitle(e.target.value)}
        //         required
        //         />
        //     </div>

        //     <div>
        //         <label>Author:</label>
        //         <input
        //         type="text"
        //         value={author}
        //         onChange={(e) => setAuthor(e.target.value)}
        //         required
        //         />
        //     </div>

        //     <div>
        //         <label>Genre:</label>
        //         <input
        //         type="text"
        //         value={genre}
        //         onChange={(e) => setGenre(e.target.value)}
        //         required
        //         />
        //     </div>

        //     <div>
        //         <label>Published Year:</label>
        //         <input
        //         type="text"
        //         value={publishedYear}
        //         onChange={(e) => setPublishedYear(e.target.value)}
        //         required
        //         />
        //     </div>
        //     <Button type="submit" variant="contained" color="primary">Add Book</Button>

        // </form>
        <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display:"flex",
                flexDirection: "column",
                gap:2,
                maxWidth: 400,
                margin:'20px auto'

            }}
            >

            <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <TextField
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
            />
            <TextField
                label="Genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
            />
            <TextField
                label="Year Published"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                required
            />
            <Button type="submit"
                    variant="contained"
                    color="primary"> Add Book
            </Button>

        </Box>
    );

};

export default BookForm;
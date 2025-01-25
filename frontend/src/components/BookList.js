import React from "react";
import {Button, List,ListItem,ListItemText,Typography} from '@mui/material';
import BookItem from "./BookItem";
const BookList =({books,onDelete}) => {
    if (!Array.isArray(books) || books.length === 0) {
        return <Typography>No Books Available</Typography>;
    }
    return (

        <div style={{maxWidth: 600, margin: '20px auto' }}>
            <Typography variant="h5" gutterBottom>
                Books List
            </Typography>
            
            <List>
                {books.map((book,index) =>(
                    <BookItem key={index} book={book} onDelete={onDelete}/>
            ))}
            </List>
           

        </div>
    );
}

export default BookList;
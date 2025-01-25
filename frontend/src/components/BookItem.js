import React from "react";
import { Button,ListItem,ListItemText } from "@mui/material";

const BookItem=({book,onDelete}) =>{
    return(
        <ListItem
        sx={{display:'flex',
            justifyContent:'space-between',
            borderBottom:'1px solid #ddd',
            padding:'10px 0'
        }}
        >
            <ListItemText
            primary={`${book.title} by ${book.author}`} 
            secondary={`${book.publishedYear} - ${book.genre}`}
        />
            <Button 
                variant="outlined"
                color="secondary"
                onClick={() => onDelete(book._id)}
                sx={{marginLeft:'10px'}}
            >
                Delete
            </Button>
        </ListItem>

    )
}

export default BookItem;
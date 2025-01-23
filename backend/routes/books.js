const express= require('express');
const router=express.Router();
// require model book
const Book=require('../models/Book');

// LOGIC TO GET ALL Books
router.get('/', async (req,res) =>{
    try {
        const books=await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }

})

// POST route to create a new book
router.post('/', async (req,res) =>{
    console.log('Request Body:', req.body); // Log the request body
    const {title, author,genre,publishedYear} =req.body;

    console.log('Extracted Fields:', { title, author, genre, publishedYear }); // Log the extracted fields
    const book= new Book({title, author,genre,publishedYear});
    try {
        const savedBook= await book.save();
        res.status(201).json(savedBook);   
    } catch (error) {
        console.error('Error saving book:', error.message);
        res.status(400).json({message:error.message});
        
    }
})


// PUT route to update book
router.put('/:id', async(req,res) =>{
    try {
        const updateBook =await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updateBook);
        
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
})
// DELETE to delete
router.delete('/:id', async(req,res) =>{
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json('Book Deleted Successfully');
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

module.exports = router;


const express =require('express');
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser= require('body-parser');
const bookRoutes = require('./routes/books');


// load env variables
dotenv.config();
const PORT = process.env.PORT || 8000;

const app=express();
// middleware
app.use(bodyParser.json());
app.use(cors());
// connect to DB
mongoose
.connect(process.env.MONGO_URI)
.then(() =>{ console.log('Mongo DB Connected')})
.catch((err) => {console.error(err);})

// routes
app.get('/',(req,res)=>{
    res.send('Welcome to Books Directory API');

})
app.use('/books', bookRoutes);


//start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import axios from 'axios';
// Backend API
const API_URL='http://localhost:8000/books';

// Fetch ALL Books
export const fetchBooks= async () =>{
    try{
   const response= await axios.get(API_URL);
   return response.data;
    }catch(error){
        console.error('Error fetching books:', error);
        return []; // Return an empty array if the fetch fails
    }
}
// Add a new Book
export const addBook = async (book) => {
    const response =await axios.post(API_URL, book);
    return response.data;
}

// Delete a book
export const deleteBook =async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
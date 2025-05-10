// Import the custom axios instance with a predefined base URL
import axios from "./api";

// Relative path for book-related API endpoints
const Books = "/books";

// Retrieves all books from the backend
export const getAllBooks = () => axios.get(Books);

// Creates a new book entry
export const createBook = (data) => axios.post(Books, data);

// Updates an existing book using its ID
export const updateBook = (id, data) => axios.put(`${Books}/${id}`, data);

// Deletes a book by its ID
export const deleteBook = (id) => axios.delete(`${Books}/${id}`);
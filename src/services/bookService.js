import axios from "./api";

// Endpoint for book-related operations
const Books = "/books";

// Retrieves all books from the backend
export const getAllBooks = () => axios.get(Books);

// Sends a POST request to create a new book
export const createBook = (data) => axios.post(Books, data);

// Sends a PUT request to update an existing book by ID
export const updateBook = (id, data) => axios.put(`${Books}/${id}`, data);

// Sends a DELETE request to remove a book by ID
export const deleteBook = (id) => axios.delete(`${Books}/${id}`);
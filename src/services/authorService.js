// Import the custom axios instance with the base URL
import axios from "./api";

// Relative path for author-related API endpoints
const Authors = "/authors";

// Retrieves the full list of authors from the backend
export const getAllAuthors = () => axios.get(Authors);

// Sends a POST request to create a new author
export const createAuthor = (authorRequest) => axios.post(Authors, authorRequest);

// Sends a PUT request to update an existing author by ID
export const updateAuthor = (id, authorRequest) => axios.put(`${Authors}/${id}`, authorRequest);

// Sends a DELETE request to remove an author by ID
export const deleteAuthor = (id) => axios.delete(`${Authors}/${id}`);
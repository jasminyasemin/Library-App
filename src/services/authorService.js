import axios from "axios";

// Base endpoint for all author-related API requests
const Authors = "http://localhost:8080/api/v1/authors";

// Retrieves the full list of authors from the backend
export const getAllAuthors = () => axios.get(Authors);

// Sends a POST request to create a new author
export const createAuthor = (authorRequest) => axios.post(Authors, authorRequest);

// Sends a PUT request to update an existing author by ID
export const updateAuthor = (id, authorRequest) => axios.put(`${Authors}/${id}`, authorRequest);

// Sends a DELETE request to remove an author by ID
export const deleteAuthor = (id) => axios.delete(`${Authors}/${id}`);
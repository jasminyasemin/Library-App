import axios from "./api";

const endpoint = "/books";

export const getAllBooks = () => axios.get(endpoint);
export const createBook = (data) => axios.post(endpoint, data);
export const updateBook = (id, data) => axios.put(`${endpoint}/${id}`, data);
export const deleteBook = (id) => axios.delete(`${endpoint}/${id}`);
import axios from "./api";

const Books = "/books";

export const getAllBooks = () => axios.get(Books);
export const createBook = (data) => axios.post(Books, data);
export const updateBook = (id, data) => axios.put(`${Books}/${id}`, data);
export const deleteBook = (id) => axios.delete(`${Books}/${id}`);
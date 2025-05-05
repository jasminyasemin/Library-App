import axios from "axios";

const Authors = "http://localhost:8080/api/v1/authors";


export const getAllAuthors = () => axios.get(Authors);


export const createAuthor = (authorRequest) => axios.post(Authors, authorRequest);


export const updateAuthor = (id, authorRequest) => axios.put(`${Authors}/${id}`, authorRequest);


export const deleteAuthor = (id) => axios.delete(`${Authors}/${id}`);
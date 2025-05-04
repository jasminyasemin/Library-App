import axios from "./api";

const Publishers = "/publishers";

export const getAllPublishers = () => axios.get(Publishers);
export const getPublisherById = (id) => axios.get(`${Publishers}/${id}`);
export const createPublisher = (data) => axios.post(Publishers, data);
export const updatePublisher = (id, data) => axios.put(`${Publishers}/${id}`, data);
export const deletePublisher = (id) => axios.delete(`${Publishers}/${id}`);
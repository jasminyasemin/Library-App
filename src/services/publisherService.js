import axios from "./api";

// Base URL for publisher-related API requests
const Publishers = "http://localhost:8080/api/v1/publishers";

// Fetches all publishers from the backend
export const getAllPublishers = () => axios.get(Publishers);

// Fetches a specific publisher by ID
export const getPublisherById = (id) => axios.get(`${Publishers}/${id}`);

// Sends a POST request to create a new publisher
export const createPublisher = (data) => axios.post(Publishers, data);

// Updates an existing publisher by its ID
export const updatePublisher = (id, data) => axios.put(`${Publishers}/${id}`, data);

// Deletes a publisher by its ID
export const deletePublisher = (id) => axios.delete(`${Publishers}/${id}`);
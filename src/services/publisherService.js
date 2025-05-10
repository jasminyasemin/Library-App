// Import the custom axios instance configured with a base URL
import axios from "./api";

// Relative path for publisher-related API endpoints
const Publishers = "/publishers";

// Fetches all publishers from the backend
export const getAllPublishers = () => axios.get(Publishers);

// Fetches a specific publisher by its ID
export const getPublisherById = (id) => axios.get(`${Publishers}/${id}`);

// Sends a POST request to create a new publisher
export const createPublisher = (data) => axios.post(Publishers, data);

// Updates an existing publisher using its ID
export const updatePublisher = (id, data) => axios.put(`${Publishers}/${id}`, data);

// Deletes a publisher by its ID
export const deletePublisher = (id) => axios.delete(`${Publishers}/${id}`);
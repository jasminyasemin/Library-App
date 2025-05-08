// Import the axios library to handle HTTP requests
import axios from 'axios';

// Create a new axios instance with a predefined base URL
const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // All requests will be prefixed with this base path
});

// Export the instance to be used throughout the app
export default api;
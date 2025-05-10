// Import the custom axios instance with a predefined base URL
import axios from "./api";

// Relative path for category-related API endpoints
const Categories = "/categories";

// Retrieves all categories from the backend
export const getAllCategories = () => axios.get(Categories);

// Retrieves a specific category by its ID
export const getCategoryById = (id) => axios.get(`${Categories}/${id}`);

// Creates a new category entry
export const createCategory = (data) => axios.post(Categories, data);

// Updates an existing category using its ID
export const updateCategory = (id, data) => axios.put(`${Categories}/${id}`, data);

// Deletes a category by its ID
export const deleteCategory = (id) => axios.delete(`${Categories}/${id}`);
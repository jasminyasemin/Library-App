import axios from "./api";

// Endpoint for category-related API operations
const Categories = "/categories";

// Retrieves all categories from the backend
export const getAllCategories = () => axios.get(Categories);

// Retrieves a specific category by ID
export const getCategoryById = (id) => axios.get(`${Categories}/${id}`);

// Creates a new category by sending a POST request
export const createCategory = (data) => axios.post(Categories, data);

// Updates an existing category using its ID
export const updateCategory = (id, data) => axios.put(`${Categories}/${id}`, data);

// Deletes a category by its ID
export const deleteCategory = (id) => axios.delete(`${Categories}/${id}`);
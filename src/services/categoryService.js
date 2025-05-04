import axios from "./api";

const Categories = "/categories";

export const getAllCategories = () => axios.get(Categories);
export const getCategoryById = (id) => axios.get(`${Categories}/${id}`);
export const createCategory = (data) => axios.post(Categories, data);
export const updateCategory = (id, data) => axios.put(`${Categories}/${id}`, data);
export const deleteCategory = (id) => axios.delete(`${Categories}/${id}`);
// Import the custom axios instance with predefined base URL
import axios from "./api";

// Relative path for book rental (borrowing) operations
const BookRental = "/borrows";

// Retrieves the list of all book rentals
export const getAllRentals = async () => {
  return await axios.get(BookRental);
};

// Sends a POST request to create a new rental record
export const createRental = async (rentalData) => {
  return await axios.post(BookRental, rentalData);
};

// Sends a PUT request to update an existing rental by ID
export const updateRental = async (id, rentalData) => {
  return await axios.put(`${BookRental}/${id}`, rentalData);
};

// Sends a DELETE request to remove a rental record by ID
export const deleteRental = async (id) => {
  return await axios.delete(`${BookRental}/${id}`);
};
import axios from "axios";

// Base URL for book rental (borrowing) related operations
const BookRental = "http://localhost:8080/api/v1/borrows";

// Retrieves the list of all book rentals
export const getAllRentals = async () => {
  return await axios.get(BookRental);
};

// Sends a POST request to create a new rental record
export const createRental = async (rentalData) => {
  return await axios.post(BookRental, rentalData);
};

// Updates an existing rental by ID
export const updateRental = async (id, rentalData) => {
  return await axios.put(`${BookRental}/${id}`, rentalData);
};

// Deletes a rental record by ID
export const deleteRental = async (id) => {
  return await axios.delete(`${BookRental}/${id}`);
};
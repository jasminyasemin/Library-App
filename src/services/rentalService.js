import axios from "axios";

const BookRental = "http://localhost:8080/api/v1/borrows";

export const getAllRentals = async () => {
  return await axios.get(BookRental);
};

export const createRental = async (rentalData) => {
  return await axios.post(BookRental, rentalData);
};

export const updateRental = async (id, rentalData) => {
  return await axios.put(`${BookRental}/${id}`, rentalData);
};

export const deleteRental = async (id) => {
  return await axios.delete(`${BookRental}/${id}`);
};

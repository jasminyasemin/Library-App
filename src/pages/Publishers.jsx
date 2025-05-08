import React, { useEffect, useState } from "react";
import {
  getAllPublishers,
  createPublisher,
  updatePublisher,
  deletePublisher,
} from "../services/publisherService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Publishers.css";

const Publishers = () => {
  // State variables
  const [publishers, setPublishers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Fetch publishers on component mount
  const fetchPublishers = async () => {
    try {
      const res = await getAllPublishers();
      setPublishers(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Publishers could not be retrieved.");
    }
  };

  useEffect(() => {
    fetchPublishers();
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, establishmentYear, address } = form;

    // Check for empty fields
    if (!name || !establishmentYear || !address) {
      toast.warning("Please fill in all fields.");
      return;
    }

    // Prepare data to send to API
    const dataToSend = {
      name: name.trim(),
      address: address.trim() || "Address not specified",
      establishmentYear: parseInt(establishmentYear),
    };

    try {
      if (isEditing) {
        // Update existing publisher
        await updatePublisher(selectedId, dataToSend);
        toast.success("Publisher updated.");
      } else {
        // Create new publisher
        await createPublisher(dataToSend);
        toast.success("Publisher added.");
      }

      // Reset form and refresh data
      setForm({ name: "", establishmentYear: "", address: "" });
      setIsEditing(false);
      fetchPublishers();
    } catch (err) {
      console.error("Submit hatası:", err);
      toast.error("An error has occurred.");
    }
  };

  // Set form to selected publisher's data for editing
  const handleEdit = (publisher) => {
    setForm({
      name: publisher.name || "",
      establishmentYear: publisher.establishmentYear?.toString() || "",
      address: publisher.address || "",
    });
    setSelectedId(publisher.id);
    setIsEditing(true);
  };

  // Delete selected publisher
  const handleDelete = async (id) => {
    try {
      await deletePublisher(id);
      toast.success("The publisher was deleted.");
      fetchPublishers();
    } catch {
      toast.error("Deletion failed.");
    }
  };

  return (
    <div className="page-container">
      <div className="publisher-container">
        <h2 className="playfair-display-1">Publishers</h2>

        {/* Form for adding/updating publisher */}
        <form className="p-form" onSubmit={handleSubmit}>
          <input
            id="publisher-name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Publisher Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            id="publisher-year"
            name="establishmentYear"
            type="number"
            className="form-input"
            placeholder="Establishment Year"
            value={form.establishmentYear}
            onChange={(e) =>
              setForm({ ...form, establishmentYear: e.target.value })
            }
          />

          <input
            id="publisher-address"
            name="address"
            type="text"
            className="form-input"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <button className="form-btn" type="submit">
            {isEditing ? "Update" : "Add"}
          </button>
        </form>

        {/* List of all publishers */}
        <ul className="ul-2">
          {publishers.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.establishmentYear}, {p.address}
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Edit
              </button>
              <button className="edit-btn" onClick={() => handleDelete(p.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Publishers;
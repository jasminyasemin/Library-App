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
  const [publishers, setPublishers] = useState([]);
  const [form, setForm] = useState({ name: "", address: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchPublishers = async () => {
    try {
      const res = await getAllPublishers();
      setPublishers(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Yayımcılar alınamadı.");
    }
  };

  useEffect(() => {
    fetchPublishers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.address) {
      toast.warning("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      if (isEditing) {
        await updatePublisher(selectedId, form);
        toast.success("Yayımcı güncellendi.");
      } else {
        await createPublisher(form);
        toast.success("Yayımcı eklendi.");
      }
      setForm({ name: "", address: "" });
      setIsEditing(false);
      fetchPublishers();
    } catch {
      toast.error("Bir hata oluştu.");
    }
  };

  const handleEdit = (publisher) => {
    setForm({ name: publisher.name, address: publisher.address });
    setSelectedId(publisher.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deletePublisher(id);
      toast.success("Yayımcı silindi.");
      fetchPublishers();
    } catch {
      toast.error("Silme işlemi başarısız.");
    }
  };

  return (
    <div className="page-container">
      <div className="publisher-container">
        <h2 className="playfair-display-1">Publishers</h2>

        <form className="c-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Publisher Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <button className="form-btn" type="submit">
            {isEditing ? "Güncelle" : "Ekle"}
          </button>
        </form>

        <ul>
          {publishers.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.address}
              <button className="edit-btn" onClick={() => handleEdit(p)}>Düzenle</button>
              <button className="edit-btn" onClick={() => handleDelete(p.id)}>Sil</button>
            </li>
          ))}
        </ul>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Publishers;
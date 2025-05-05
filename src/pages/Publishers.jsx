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
  const [form, setForm] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });
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
    const { name, establishmentYear, address } = form;
  
    if (!name || !establishmentYear || !address) {
      toast.warning("Lütfen tüm alanları doldurun.");
      return;
    }
  
    try {
      const dataToSend = {
        name: name.trim(),
        address: address.trim() || "Adres belirtilmedi", // garantiye almak için
        establishmentYear: parseInt(establishmentYear),
      };
  
      if (isEditing) {
        await updatePublisher(selectedId, dataToSend);
        toast.success("Yayımcı güncellendi.");
      } else {
        await createPublisher(dataToSend);
        toast.success("Yayımcı eklendi.");
      }
  
      setForm({ name: "", establishmentYear: "", address: "" });
      setIsEditing(false);
      fetchPublishers();
    } catch (err) {
      console.error("Submit hatası:", err);
      toast.error("Bir hata oluştu.");
    }
  };

  const handleEdit = (publisher) => {
    setForm({
      name: publisher.name || "",
      establishmentYear: publisher.establishmentYear?.toString() || "",
      address: publisher.address || "",
    });
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
    {isEditing ? "Güncelle" : "Ekle"}
  </button>
</form>

        <ul className="ul-2">
          {publishers.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.establishmentYear}, {p.address}
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Düzenle
              </button>
              <button className="edit-btn" onClick={() => handleDelete(p.id)}>
                Sil
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
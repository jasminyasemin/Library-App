# 📚 The Library – Library Management System

A full-featured Library Management System built with **React** for the frontend and **Spring Boot** for the backend. The system allows users to **manage books, authors, categories, publishers, and rentals** with a clean UI and real-time feedback using **React Toastify**.

---

## 🔧 Tech Stack

### 💻 Frontend
- React 18
- React Router DOM
- Axios
- React Toastify
- CSS (Custom + Responsive)
- Lordicon for animated sidebar icons

### 🚀 Backend
- Spring Boot (Java 17)
- PostgreSQL
- REST API
- Docker + Docker Compose

---

## 🌟 Features

### 🔍 Discover Page
- Book cover UI
- Search bar (functionality can be extended)
- Responsive design with a visually engaging layout

### 📁 Categories
- List, create, update, and delete book categories
- Form validation with feedback
- Dynamic list rendering

### 🖋 Authors
- Manage author name, birthdate, and country
- Editable and deletable entries
- Date input handling with formatting

### 🏢 Publishers
- Handle publisher details including name, address, and year of establishment
- Auto-trimming and input cleanup on form submission

### 📘 Books
- Complex form with dynamic dropdowns for author and publisher
- Multi-category selection via checkboxes
- CRUD operations with validation

### 📄 Rentals
- Add, update, or delete book borrowings
- Return dates can be optionally added during update
- Book and borrower linkage logic

### 🧭 Navigation
- Sidebar navigation using `NavLink`
- Animated icons via Lordicon
- Clean separation between routes

### 🚧 Coming Soon Pages
- Placeholder pages for "Favorites", "Settings", and "Help"
- Includes a **smoothly swinging image** animation for visual feedback
- Enhances UX by showing these features are in progress

---

## 🗂 Project Structure

```
├── public/images           # Book cover images and comingsoon.png
├── src/
│   ├── components/         # Reusable components (Form, BookCard, Navbar)
│   ├── layouts/            # MainLayout (sidebar + content area)
│   ├── pages/              # Functional pages (Home, Books, Rentals, etc.)
│   ├── services/           # Axios-based API calls
│   ├── styles/             # All CSS files organized by component/page
│   ├── App.jsx             # Routing setup
│   ├── index.js            # Main render logic
│   └── ...
```

---

## 📦 API Base URL

```js
http://localhost:8080/api/v1
```

All services (books, authors, rentals...) follow standard REST patterns.

---

## 🎨 UI Highlights

- **Playfair Display** and **Inter** fonts for elegant typography
- Smooth hover effects and transitions
- Shadowed cards and inputs for modern look
- Visually enhanced "Coming Soon" with subtle animation

---

## 🙋‍♀️ Author

**Jasmin Kıcıman**  
Economics & Finance student | Full Stack Developer in training  
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/jasminyaseminkıcıman-2a4479348/)

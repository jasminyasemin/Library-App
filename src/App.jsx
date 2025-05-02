import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Publishers from './pages/Publishers';
import Authors from './pages/Authors';
import Books from './pages/Books';
import BookRentals from './pages/BookRentals';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="publishers" element={<Publishers />} />
        <Route path="authors" element={<Authors />} />
        <Route path="books" element={<Books />} />
        <Route path="rentals" element={<BookRentals />} />
      </Route>
    </Routes>
  );
};

export default App;
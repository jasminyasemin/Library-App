import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Publishers from './pages/Publishers';
import Authors from './pages/Authors';
import Books from './pages/Books';
import BookRentals from './pages/BookRentals';
import ComingSoon from './pages/ComingSoon';

const App = () => {
  return (
    // Define the main routing structure for the app
    <Routes>
      {/* All routes will be rendered inside the MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* Index route renders the Home page */}
        <Route index element={<Home />} />
        {/* Route for the Categories management page */}
        <Route path="categories" element={<Categories />} />
        {/* Route for the Publishers management page */}
        <Route path="publishers" element={<Publishers />} />
        {/* Route for the Authors management page */}
        <Route path="authors" element={<Authors />} />
        {/* Route for the Books management page */}
        <Route path="books" element={<Books />} />
        {/* Route for the Book Rentals (borrowed books) page */}
        <Route path="rentals" element={<BookRentals />} />
        <Route path="favorites" element={<ComingSoon />} />
        <Route path="settings" element={<ComingSoon />} />
        <Route path="help" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
};

export default App;
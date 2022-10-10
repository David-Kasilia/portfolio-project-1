import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import SeriesPage from './components/SeriesPage';
import Profile from './components/Profile';
import Footer from './components/Footer';
import About from './components/About';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

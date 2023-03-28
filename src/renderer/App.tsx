import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Movies from './Movies';
import Player from './Player';
import TvShows from './TvShows';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TvShows />} />
      </Routes>
    </Router>
  );
}

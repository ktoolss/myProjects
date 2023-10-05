import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Spreadsheet from './Spreadsheet';
import EmailPage from './EmailPage';
import PowerPointPage from './PowerPointPage';
import WordPage from './WordPage';
import OneNotePage from './OneNotePage';

import './App.css';  // Assuming you'll be storing the styles in App.css

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link className="nav-link" to="/">Word</Link>
          <Link className="nav-link" to="/email">Email</Link>
          <Link className="nav-link" to="/powerpoint">PowerPoint</Link>
          <Link className="nav-link" to="/spreadsheet">Spreadsheet</Link>
          <Link className="nav-link" to="/onenote">OneNote</Link>
          <p className="thought-nest-color">ThoughtNest</p>
        </nav>

        <Routes>
          <Route path="/" element={<WordPage />} />
          <Route path="/spreadsheet" element={<Spreadsheet />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/powerpoint" element={<PowerPointPage />} />
          <Route path="/onenote" element={<OneNotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

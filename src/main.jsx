import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} /> {/* Changed to About */}
        <Route path="/resume" element={<Resume />} /> {/* Changed to Resume */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

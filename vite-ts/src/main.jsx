import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import ErrorPage from "./pages/error/error.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
      
    </Routes>
  </Router>
);







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>  {/* Ensure that Router is wrapping everything */}
      <Navbar /> {/* Navbar is always displayed */}

      <div >
        <Routes>
          <Route path="/" element={<Hero />} />  {/* Home page */}
          <Route path="/about" element={<About />} />  {/* About page */}
          <Route path="/skills" element={<Skills />} />  {/* Skills page */}
          <Route path="/contact" element={<Contact />} />  {/* Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

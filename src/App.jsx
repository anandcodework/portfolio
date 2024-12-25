import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router>  {/* Ensure that Router is wrapping everything */}
      <Navbar /> {/* Navbar is always displayed */}

      <div >
        <Routes>
          <Route path="/" element={<Hero />} />  {/* Home page */}
          <Route path="/service" element={<Service />} />  {/* Service page */}
          <Route path="/resume" element={<Resume />} />  {/* Skills page */}
          <Route path="/contact" element={<Contact />} />  {/* Contact page */}
          <Route path="/project" element={<Project />} />  {/* Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

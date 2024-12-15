import Navbar from './components/Navbar'
import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
  </>
  )
}

export default App
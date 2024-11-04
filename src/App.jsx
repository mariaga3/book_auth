import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import BookDetails from './components/BookDetails';
import { slideData } from './components/Slider';
import ContactPage from './components/Contact';
import { ThemeProvider } from './components/ThemeContextSetUp'; // Use ThemeProvider, not ThemeContext

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider value={{ theme, setTheme }}> {/* Wrap with ThemeProvider */}
      <Router>
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home slides={slideData}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

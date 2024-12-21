import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lightIcon from '../assets/n.png';
import darkIcon from '../assets/sunn.png';
import lightLogo from '../assets/ziri4.png'; // Light mode logo
import darkLogo from '../assets/jo.png'; // Dark mode logo
import { ThemeContext } from './ThemeContextSetUp'; // Import the ThemeContext
import Product from '../components/Product';
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Access theme and setTheme from context

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 shadow-sm z-50  ${theme === 'dark' ? 'bg-black text-white' : 'bg-primary text-gray-800'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Conditionally render logo based on theme */}
        <Link to="/" className="flex items-center">
          <img 
            src={theme === 'light' ? lightLogo : darkLogo} 
            alt="BookHaven Home" 
            className="h-14 w-18"
          />
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-primarydark transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-primarydark transition-colors">Author</Link></li>
          <li><Link to="/other_books" className="hover:text-primarydark transition-colors">Other Books</Link></li>
          <li><Link to="/" className="hover:text-primarydark transition-colors">What you'll learn</Link></li>

          <li><Link to="/contact-us" className="hover:text-primarydark transition-colors">Contact</Link></li>
        </ul>
        <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          // className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-600' : 'bg-primary-dark hover:bg-primary'} transition-colors`}
        >
          <img 
            src={theme === 'light' ? lightIcon : darkIcon} 
            alt={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"} 
            className="w-6 h-6"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

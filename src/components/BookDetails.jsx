import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideData } from './Slider';
import leafImage from '../assets/era.png';

const BookDetails = ({ isDarkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  
  useEffect(() => {
    console.log(`Received book ID: ${id}`);
    console.log('Available books:', slideData.map(book => book.id));
    
    const foundBook = slideData.find(book => book.id === parseInt(id));
    if (foundBook) {
      setBook(foundBook);
    } else {
      console.log(`No book found with ID: ${id}`);
      navigate('/');
    }
  }, [id, navigate]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container mt-20 mx-auto px-4 py-12 min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-primary text-black'}`}>
      {/* Top-left leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-0 left-0 w-32 h-auto opacity-20 pointer-events-none"
      />
      {/* Top-right leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-0 right-0 w-32 h-auto opacity-20 pointer-events-none transform rotate-90"
      />
      {/* Bottom-left leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute bottom-0 left-0 w-32 h-auto opacity-20 pointer-events-none transform -rotate-90"
      />
      {/* Bottom-right leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute bottom-0 right-0 w-32 h-auto opacity-20 pointer-events-none transform rotate-180"
      />
      {/* Center leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-auto opacity-10 pointer-events-none"
      />
      
      <div className="flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img src={book.bookCoverImage} alt={book.headline} className="w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 md:pl-8"
        >
          <h2 className="text-3xl font-bold mb-4">{book.headline}</h2>
          <p className="mb-6">{book.Desc}</p>
          <button className="bg-primarydark text-black px-6 py-2 rounded-full hover:bg-primarydark transition duration-300">
            Buy Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDetails;
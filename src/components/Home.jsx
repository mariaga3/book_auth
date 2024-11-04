import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BooksSlider, { bookData } from './Product';

const Home = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToBookDetails = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className='overflow-y-auto'>
      <section className='min-h-screen'>
        <div className="relative h-screen overflow-hidden bg-black">
          {slides.map((slide, index) => (
            <AnimatePresence initial={false} key={slide.id}>
              <motion.div
                className={`absolute inset-0 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 flex flex-col sm:flex-row items-center p-4">
                  <div className="w-full sm:w-1/2 text-white p-4 sm:p-8 lg:p-16 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif mb-2 sm:mb-4" style={{ fontFamily: "'Trajan Pro', serif" }}>{slide.headline}</h2>
                    <p className="text-sm sm:text-lg lg:text-2xl mb-2 sm:mb-6 text-gray-300 font-serif">{slide.Desc}</p>
                    <p className="text-xs sm:text-sm lg:text-xl mb-4 sm:mb-8 text-white italic">{slide.poem}</p>
                    <button 
                      className="bg-primarydark text-black px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded-md hover:bg-purple-700 transition duration-300 uppercase text-xs sm:text-sm tracking-wider"
                      onClick={() => goToBookDetails(slide.id)}
                    >
                      Read More
                    </button>
                  </div>
                  <div className="w-full sm:w-1/2 flex justify-center items-center mt-4 sm:mt-0">
                    <motion.img
                      src={slide.bookCoverImage}
                      alt={slide.headline}
                      className="h-auto w-auto max-h-[40vh] sm:max-h-[60vh] lg:max-h-[80vh] max-w-[80%] sm:max-w-[90%] lg:max-w-full object-contain"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      style={{ transform: 'perspective(1000px) rotateY(-15deg)' }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
          <button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white p-1 sm:p-2 rounded-full z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white p-1 sm:p-2 rounded-full z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
      </section>
      <section>
        <BooksSlider books={bookData}/>
      </section>
    </div>
  );
};

export default Home;
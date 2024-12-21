import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideData } from './Slider';
import leafImage from '../assets/era.png';
import better from '../assets/betterwor.png';
import ebay from '../assets/ebbaay.png';
import beshop from '../assets/beshop.png';
import ama from '../assets/amason.png';
import noble from '../assets/noble.png';
import target from '../assets/target.png';

const BookDetails = ({ isDarkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const retailers = [
    {  logo: better, link: 'https://www.betterworldbooks.com/product/detail/mu-mpuzu-z-umutima-umurage-umuco-isana-mitima-urukundo-mu-bantu-9798218452056' },
    { logo: ama, link: 'https://www.amazon.com/Mu-Mpuzu-ZUmutima-urukundo-Kinyarwanda/dp/B0D89H6TYQ' },
    { logo: ebay, link: 'https://www.ebay.co.uk/itm/365201295165?_trkparms=amclksrc%3DITM%26aid%3D1110006%26algo%3DHOMESPLICE.SIM%26ao%3D1%26asc%3D276750%26meid%3D2d2a0a2c939c4655b2fa9d9edf2d8673%26pid%3D101224%26rk%3D1%26rkt%3D5%26sd%3D235672673170%26itm%3D365201295165%26pmt%3D1%26noa%3D0%26pg%3D2332490%26algv%3DDefaultOrganicWebV9BertRefreshRankerWithCassiniEmbRecall&_trksid=p2332490.c101224.m-1&itmprp=cksum%3A3652012951652d2a0a2c939c4655b2fa9d9edf2d8673%7Cenc%3AAQAJAAABIFBRV3XPO4vjSjt41baQ6JJepvcRBSDR4z1drD8BzA6QgL4ueEp%252B3AJpsZMXAJz7IRjeeLd17GJCDzpY663fIURImDa58g6oO6NBZ3Lf2plDbK65hJ5%252FOf6tixJI5l8ep%252FQVDHkpBZyqYk5UUeQHDlAkVv73qrgJsDBbD8u7EWeEnBbHdjesnM%252B3U2AUT4B2LgDMi4aGdRBqGpvac2B%252BafsYCV%252FQkrD9ktImAVMSwHkZFYVq%252BRKb6GfLzpHgKkJikobzC%252Bntv59U8VdjBlE4E2xG%252Fr3ALpGH2Sm0g4LIsXbnZ09KidQKrGvouFrSM15klzKSjSB0CawhNhtdGirPRjMyAuBql9MevYFTP%252F11wvv%252FDi8c130PdqILQWRkQz25%252FQ%253D%253D%7Campid%3APL_CLK%7Cclp%3A2332490&epid=8070063614&itmmeta=01JCV1BA40SHGBXXGWND26EDRS' },
    {  logo: noble, link: '#' },
    {  logo: beshop, link: '#' },
    {  logo: target, link: '#' },
  ];
  
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
    <div className={`container mt-4 mx-auto px-0 py-2 min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-black text-white' : 'bg-primary text-black'}`}>
      {/* Decorative leaves */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-20 left-0 w-32 h-auto opacity-20 pointer-events-none"
      />
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-20 right-0 w-32 h-auto opacity-20 pointer-events-none transform rotate-90"
      />
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute bottom-0 left-0 w-32 h-auto opacity-20 pointer-events-none transform -rotate-90"
      />
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute bottom-0 right-0 w-32 h-auto opacity-20 pointer-events-none transform rotate-180"
      />
      <img
        src={leafImage}
        alt="Decorative leaf"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-auto opacity-10 pointer-events-none"
      />
      <div className='flex flex-1 mx-10 flex-col justify-center'>
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mt-20 mb-2">{book.headline}</h2>
            <h2 className='text-2xl font-bold mb-4'>{book.contents}</h2>
            <div className="flex flex-col items-center">
              <h4 className="mb-2 text-xl">{book.Desc}</h4>
              <div className="flex items-center justify-center w-full">
                <div className="flex-grow h-px bg-gray-400 max-w-xs"></div>
                <img 
                  src={leafImage} 
                  alt="Decorative divider" 
                  className="mx-4 w-8 h-8 opacity-50"
                />
                <div className="flex-grow h-px bg-gray-400 max-w-xs"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 md:pl-8"
          >



            <img src={book.bookCoverImage} className="w-full mt-10" alt="Book cover" />
            <div className="flex items-center justify-center w-full">
                <div className="mx-5 flex-grow h-px bg-gray-400 max-w-[100px]"></div>
                <h3 className="mx-2 w-8 h-8 opacity-50">RETAILERS</h3>
               
                <div className="mx-20 flex-grow h-px bg-gray-400 max-w-[100px]"></div>
              </div>
              <div className="grid grid-cols-3 justify-items-center">
                {retailers.map((retailer) => (
                  <a
                    
                    href={retailer.link}
                    className="transition-transform hover:scale-105"
                    
                  >
                    <img
                      src={retailer.logo}
                      
                      className="h-8 w-auto object-contain opacity-80 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
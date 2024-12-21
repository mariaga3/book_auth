import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import leafImage from '../assets/era.png'
import { ThemeContext } from './ThemeContextSetUp';

const TitleWithLines = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center w-full my-8">
      <div className="w-full max-w-4xl flex items-center">
        <div className="flex-grow h-px bg-gray-400 max-w-xs"></div>
        <h2 className={`px-4 text-3xl font-bold uppercase tracking-wider ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          {title}
        </h2>
        <div className="flex-grow h-px bg-gray-400 max-w-xs"></div>
      </div>
    </div>
  );
};
export const bookData = [

  { id: 1, image: book1, name: "Mu mpuzu zumutima" },
  { id: 2, image: book2, name: "Dogs coloring book" },
  { id: 3, image: book1, name: "Livre De Coloriage" },
  { id: 4, image: book2, name: "book 4" },
  { id: 5, image: book1, name: "book 5" },
  { id: 6, image: book2, name: "book 6" },
  { id: 7, image: book2, name: "book 7" },
];

const BooksSlider = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const goToBookDetails = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className={`py-16 relative overflow-hidden ${theme === 'light' ? 'bg-primary' : 'bg-black'}`}>
      {/* Decorative leaves */}
      <img src={leafImage} alt="Decorative leaf" className={`absolute top-0 left-0 w-32 h-auto pointer-events-none ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`} />
<img src={leafImage} alt="Decorative leaf" className={`absolute top-0 right-0 w-32 h-auto pointer-events-none transform rotate-90 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`} />
<img src={leafImage} alt="Decorative leaf" className={`absolute bottom-0 left-0 w-32 h-auto pointer-events-none transform -rotate-90 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`} />
<img src={leafImage} alt="Decorative leaf" className={`absolute bottom-0 right-0 w-32 h-auto pointer-events-none transform rotate-180 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`} />
<img src={leafImage} alt="Decorative leaf" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-auto pointer-events-none ${theme === 'light' ? 'opacity-10' : 'opacity-30'}`} />

      
      <TitleWithLines title="OTHER BOOKS" />
      
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper relative z-10"
      >
        {bookData.map((book) => (
          <SwiperSlide key={book.id} className="w-60 h-96">
            <div className="flex items-center justify-center w-full h-full">
              <div className="cursor-pointer relative group" onClick={() => goToBookDetails(book.id)}>
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-70 flex items-center justify-center w-full h-full">
                  <p className="text-black text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {book.name}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BooksSlider;
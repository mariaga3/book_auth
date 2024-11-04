import React, {useContext} from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import job from '../assets/job.jpg';
import leafImage from '../assets/era.png';
import { ThemeContext } from './ThemeContextSetUp';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container mx-auto px-4 py-6 h-screen flex items-center relative overflow-hidden ${theme === 'light' ? 'bg-primary text-gray-900' : 'bg-black text-white'}`}>
      {/* Top-left leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-16 left-0 w-32 h-auto pointer-events-none ${theme === 'light'? 'opacity-20': 'opacity-30'}`}
      />
      {/* Top-right leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-16 right-0 w-32 h-auto pointer-events-none transform rotate-90 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`}
      />
      {/* Bottom-left leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute bottom-0 left-0 w-32 h-auto pointer-events-none transform -rotate-90 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`}
      />
      {/* Bottom-right leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute bottom-0 right-0 w-32 h-auto pointer-events-none transform rotate-180 ${theme === 'light'? 'opacity-20' : 'opacity-30'}`}
      />
      {/* Center leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-auto pointer-events-none ${'light' ? 'opacity-10' : 'opacity-30'}`}
      />
      
      <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto relative z-10">
        <div className="md:w-2/5 mb-4 md:mb-0">
          <img 
            src={job} 
            alt="Job Zirikana" 
            className="rounded-lg shadow-lg w-5/6 max-w-xs mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="md:w-3/5 md:pl-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">About The Author</h2>
          <p className="mb-4 text-xs md:text-sm line-clamp-6">
            Job Zirikana What begins as simple amusement for the nobility takes a perilous turn
            when Luzia garners the notice of Antonio Pérez, the disgraced secretary to Spain's king. Still reeling from the 
            defeat of his armada, the king is desperate for any advantage in the war against England's heretic queen―and Pérez will stop at nothing to regain the king's favor.
          </p>
          <div className="flex space-x-4">
            {[FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className={`text-lg md:text-xl transition-all duration-300 ease-in-out hover:scale-125 ${theme === 'light' ? 'text-primarydark hover:text-gray-800' : 'text-white hover:text-primarydark'}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React, {useContext} from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaSkype, FaPhone, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import leafImage from '../assets/era.png';
import co2 from '../assets/co2.jpg';
import { ThemeContext } from './ThemeContextSetUp';

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={` h-screen flex items-center justify-center p-2 relative overflow-hidden ${theme === 'light'? 'bg-primary' : 'bg-black'}`}>
      {/* Top-left leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-16 left-0 w-32 h-auto pointer-events-none ${theme === 'light'? 'opacity-20' : 'opacity-30'}`}
      />
      {/* Top-right leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-16 right-0 w-32 h-auto  pointer-events-none transform rotate-90 ${theme === 'light' ? 'opacity-20' :'opacity-30'}`}
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
        className={`absolute bottom-0 right-0 w-32 h-auto pointer-events-none transform rotate-180 ${theme === 'light' ? 'opacity-20' : 'opacity-30'}`}
      />
      {/* Center leaf */}
      <img
        src={leafImage}
        alt="Decorative leaf"
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-auto  pointer-events-none ${theme === 'light' ? 'opacity-10' :'opacity-30'}`}
      />
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 flex max-w-3xl w-2/3 relative z-10">
        <img src= {co2} className='w-2/5 bottom-2 rounded-sm p-2'/>
        <div className=" text-white p-4 flex flex-col justify-between w-2/5 absolute left-2 top-2 bottom-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div>
            <h2 className="text-xl font-bold mb-3">Contact Me</h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-white" />
                <p>23 Avenue de Paris 75012 Paris</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-white" />
                <p>hello@mikechemardin.com</p>
              </div>
              <div className="flex items-center">
                <FaSkype className="mr-2 text-white" />
                <p>Job Zirikana</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-white" />
                <p>+33619530144</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-3">
            <FaInstagram className="text-white hover:text-white transition-colors" />
            <FaTwitter className="text-white hover:text-white transition-colors" />
            <FaLinkedin className="text-white hover:text-white transition-colors" />
          </div>
        </div>
        <div className="p-4 w-3/5 ml-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-3 text-xs">Feel free to drop us a line below!</p>
          <form className="space-y-2">
            <input type="text" placeholder="Your name" className="w-full p-1.5 text-sm border border-gray-300 rounded" />
            <input type="email" placeholder="Your email" className="w-full p-1.5 text-sm border border-gray-300 rounded" />
            <textarea placeholder="Your message" rows="3" className="w-full p-1.5 text-sm border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-primarydark text-white px-6 py-1.5 text-sm rounded-full hover:bg-sky-500 transition-colors">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
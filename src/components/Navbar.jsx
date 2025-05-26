import React, { useState } from 'react';
import logo from '../assets/logo.png'; 
import profile from '../assets/profile.png'; 
import shop from '../assets/shop.png'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location= useLocation()
  
 
  const [activeTab, setActiveTab] = useState("/");

  
  const isActive = (path) => location.pathname === path;

   const navigate = useNavigate();

   const handleClick = () => {
    navigate("/profile");
   }

   const handleTabClick = (tab) => {
    setActiveTab(tab);

   }
  
 

  
    return (
    <nav className="bg-[#e1ece3]">
     
      <div className="container w-screen px-4 py-3 xl:px-14 flex justify-between items-center">
        
        <div>
          <img src={logo} alt="Logo" className="h-10" /> 
        </div>
        
        <ul className="hidden sm:flex xl:gap-16 space-x-6 font-medium text-sm justify-between mx-4">
        
           <li>
            <Link to="/" className={`text-black font-RedHatText hover:text-green-500 transition duration-300
                ${isActive('/') 
                  ? ' text-green-500' 
                  : 'text-green-800 '
                }`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={`text-black font-RedHatText hover:text-green-500 transition duration-300
                ${isActive('/shop') 
                  ? ' text-green-500' 
                  : 'text-black '
                }`} >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/events" className={`text-black font-RedHatText hover:text-green-500 transition duration-300
                ${isActive('/events') 
                  ? ' text-green-500' 
                  : 'text-black '
                }`}>
              Events
            </Link>
          </li>
          <li>
            <Link to="#" className={`text-black font-RedHatText hover:text-green-500 transition duration-300
                ${isActive('/contact-us') 
                  ? ' text-green-500' 
                  : 'text-black '
                }`}>
              Contact Us
            </Link>
          </li> 
        </ul>

        
        <div className="relative">
      <div className="hidden sm:flex space-x-4">
        <img
          src={profile}
          alt="Profile"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer h-6 w-6"
        />
        <img
          src={shop}
          alt="Shop"
          className="cursor-pointer h-6 w-6"
          onClick={() => navigate('/shop')}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 p-4 bg-white rounded-2xl shadow-lg z-50">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-400 cursor-pointer" />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4 mt-2">
            <button
              className="w-full py-2 bg-green-700 cursor-pointer text-white rounded-md hover:opacity-90"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              LOGIN
            </button>
            <button
              className="w-full py-2 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => {
                navigate('/signup');
                setIsOpen(false);
              }}
            >
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
      
        <button
          className="sm:hidden text-gray-700 focus:outline-none mx-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      
      <div className="w-screen border-b-1 border-[#aaaa]"></div> {/* Full-width border */}

      {isOpen && (
        <div className="md:hidden bg-[#e1ece3] px-4 py-2">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-500 transition duration-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-500 transition duration-300">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-green-500 transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <img src={profile} alt="Profile" className="cursor-pointer h-6 w-6"  />
            <img src={shop} alt="Shop" className="cursor-pointer h-6 w-6"  />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
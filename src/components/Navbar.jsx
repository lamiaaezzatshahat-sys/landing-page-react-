// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import slogin from '../assets/imgs/logononback.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-3 sm:py-5'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl shrink-0">
              <img src={slogin} alt='Logo' className='w-full h-full border-r border-gray-600 object-contain'/>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Smart Traffic <br />Computer Systems</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base font-semibold text-gray-700 hover:text-gray-900 
                         transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 
                               bg-linear-to-r from-gray-900 to-gray-600 
                               group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="https://wa.me/201096807359"
              className="but_whatsapp justify-center text-sm lg:text-base ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FaWhatsapp size={18} />
                Get WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute left-0 right-0 bg-white shadow-xl 
                       transition-all duration-300 z-40 ${isOpen ? 'top-full opacity-100' : 
                       'top-0 opacity-0 pointer-events-none'}`}>
          <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 sm:py-3 text-sm sm:text-base font-semibold text-gray-700 
                         hover:text-gray-900 hover:bg-gray-100 
                         rounded-lg px-3 sm:px-4 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/201096807359"
              className="but_whatsapp justify-center text-sm sm:text-base block mt-2 sm:mt-4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
                <FaWhatsapp size={16} />
              Get WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
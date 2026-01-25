// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import slogin from '../assets/imgs/Slogin2.png';



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
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className=" w-12h-12 bg-gradient-to-br from-primary-blue to-secondary-teal 
                          rounded-xl  ">
                            <img src={slogin} alt='Logo' className='w-[99px] h-[53px] border-r border-gray-600 object-contain'/>
             
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-dark">Smart Traffic</h1>
              <p className="text-xs text-gray-600">Computer Systems</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-gray-700 hover:text-primary-blue 
                         transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 
                               bg-gradient-to-r from-primary-blue to-secondary-teal 
                               group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
               href="https://wa.me/201096807359"
              className="btn-primary justify-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Phone size={18} />
             Get WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute left-0 right-0 bg-white shadow-xl 
                       transition-all duration-300 ${isOpen ? 'top-full opacity-100' : 
                       'top-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 font-semibold text-gray-700 
                         hover:text-primary-blue hover:bg-blue-50 
                         rounded-lg px-4 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/201001234567"
              className="btn-primary justify-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Get WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// components/Footer.jsx
import React from 'react';
import slogin from '../assets/imgs/logononback.png';
import { 
  Car, Mail, Phone, MapPin, 
  Facebook, Twitter, Linkedin, Instagram, Youtube 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Traffic Engineering', href: '#traffic' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Programming', href: '#programming' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Traffic Signal Systems',
    'AI Traffic Management',
    'Traffic Data Analytics',
    'Traffic Safety Systems',
    'Smart Parking Solutions',
    'Public Transport Systems',
  ];

  const socialLinks = [
    
    { icon: Linkedin, label: 'LinkedIn' }
   
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/80 
                              rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                <img src={slogin} alt="Logo" className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-bold">Smart Traffic <br />Computer Systems</h3>
              </div>
            </div>
            
            <p className="text-white/80 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
              Leading provider of intelligent traffic management and 
              engineering solutions powered by cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg flex items-center 
                          justify-center hover:bg-gray-700 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 sm:w-5 h-4 sm:h-5 hover:text-gray-400 hover:transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative pb-2 sm:pb-3">
              Quick Links
              <div className="absolute bottom-0 left-0 w-10 h-0.5 sm:h-1 bg-gray-600 
                            rounded-full"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-xs sm:text-sm
                             transition-colors flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full 
                                  mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 
                                  transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative pb-2 sm:pb-3">
              Our Services
              <div className="absolute bottom-0 left-0 w-10 h-0.5 sm:h-1 bg-gray-600 
                            rounded-full"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white text-xs sm:text-sm
                             transition-colors flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full 
                                  mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 
                                  transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative pb-2 sm:pb-3">
              Contact Info
              <div className="absolute bottom-0 left-0 w-10 h-0.5 sm:h-1 bg-gray-600 
                            rounded-full"></div>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-white/80 text-xs sm:text-sm leading-snug">
                  53 Dr Hasan El-Shareef, Al Manteqah Ath Thamenah, Nasr City, Cairo Governorate 4441576, Egypt
                </p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 shrink-0" />
                <a href="tel:+201227340564" className="text-white/80 hover:text-white text-xs sm:text-sm">
                 +201227340564
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 shrink-0" />
                <a href="mailto:info@smarttraffic.com" className="text-white/80 hover:text-white text-xs sm:text-sm break-all">
                  info@smarttraffic.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
              <h5 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-l-lg bg-white text-gray-900 text-xs sm:text-sm
                           outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button className="bg-gray-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-r-lg 
                                 text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-xs sm:text-sm">
            &copy; {currentYear} Smart Traffic Computer Systems. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
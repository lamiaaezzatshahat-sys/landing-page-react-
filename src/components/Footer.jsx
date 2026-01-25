// components/Footer.jsx
import React from 'react';
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
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-secondary-teal 
                            rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Smart Traffic</h3>
                <p className="text-white/70 text-sm">Computer System</p>
              </div>
            </div>
            <p className="text-white/80 mb-8">
              Leading provider of intelligent traffic management and 
              engineering solutions powered by cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center 
                           justify-center hover:bg-secondary-teal transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 hover:text-teal-500 hover:transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-3">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-secondary-teal 
                            rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary-teal 
                             transition-colors flex items-center group hover:text-white"
                  >
                    <div className="w-2 h-2 bg-secondary-teal rounded-full 
                                  mr-3 opacity-0 group-hover:opacity-100 
                                  transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-3">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-secondary-teal 
                            rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-secondary-teal 
                             transition-colors flex items-center group hover:text-white"
                  >
                    <div className="w-2 h-2 bg-secondary-teal rounded-full 
                                  mr-3 opacity-0 group-hover:opacity-100 
                                  transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative pb-3">
              Contact Info
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-secondary-teal 
                            rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-teal flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  53 Dr Hasan El-Shareef, <br />Al Manteqah Ath Thamenah,<br /> Nasr City, Cairo Governorate 4441576, Egypt
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-teal" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-white">
                 +201227340564
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-teal" />
                <a href="mailto:info@smarttraffic.com" className="text-white/80 hover:text-white">
                  info@smarttraffic.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h5 className="font-bold mb-4">Subscribe to Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white text-gray-900 
                           outline-none focus:ring-2 focus:ring-secondary-teal"
                />
                <button className="bg-secondary-teal px-4 py-2 rounded-r-lg 
                                 font-semibold hover:bg-gray-400 bg-teal-500 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70">
            &copy; {currentYear} Smart Traffic Computer System. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
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
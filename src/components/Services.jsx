// components/Services.jsx
import React, { useEffect } from 'react';
import {
  Car, Brain, BarChart3, Shield,
  ParkingCircle, Bus, Wifi, Cloud
} from 'lucide-react';
import ScrollFloat from './ScrollFloat';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ShipHub from '../assets/imgs/serves/ShipHub_logo1-removebg-preview.png';
import ShipHub_imgs from '../assets/imgs/serves/thailand_featured.png';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    {
      icon: Car,
      title: 'Ride Share',
      description: 'A web-based ride-sharing platform that enables users to book individual or shared rides, select pickup and destination points on a map, split trip costs, pay via a digital wallet, and track rides in real time.',
      features: [
        'Individual & Shared Rides',
        'Map-Based Booking',
        'Cost Splitting',
        'Digital Wallet Payments',
        'Real-Time Tracking'
      ],
      image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://rideshare.transportationresearchcouncil.com/'


    },
    {
      icon: Car, // Using Car icon as placeholder, you can import a custom icon
      title: 'ShipHub Service App',
      description: ' Our ShipHub service app streamlines the process of managing, tracking, and fulfilling delivery requests for businesses and individuals. With a user-friendly interface, real-time tracking, and robust admin controls, it ensures efficient logistics management from request creation to final delivery..',
      features: ['Real-time tracking of shipments for users and drivers', 'Warehouse and resource management for optimized logistics'],
      image: ShipHub_imgs,
      link: 'https://shiphub.transportationresearchcouncil.com/'
    },
    {
      icon: BarChart3,
      title: 'Traffic Data Analytics',
      description: 'Comprehensive data collection and analysis using advanced sensors.',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Performance Reports'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      icon: Shield,
      title: 'Traffic Safety Systems',
      description: 'Advanced safety monitoring and accident prevention systems.',
      features: ['Safety Audits', 'Risk Analysis', 'Prevention Measures'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      icon: ParkingCircle,
      title: 'Smart Parking Solutions',
      description: 'Innovative parking management and guidance systems.',
      features: ['Parking Guidance', 'Space Detection', 'Mobile Payments'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      icon: Bus,
      title: 'Public Transport Systems',
      description: 'Efficient public transportation planning and management.',
      features: ['Route Optimization', 'Fleet Management', 'Passenger Info'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-section text-zinc-50 mt-12">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-blue 
                        font-semibold  tracking-wider mb-4">
            {/* <div className="w-3 h-3 bg-secondary-teal rounded-full"></div> */}
            <h2 className='text-4xl font-bold text-zinc-50 text-center'>Our Services</h2>
          </div>


          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.04}
            containerClassName="section-title text-amber-100"
            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-white"
          >
            Comprehensive Traffic Solutions
          </ScrollFloat>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We deliver end-to-end traffic management systems powered by
            technology and engineering excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg 
                        card-hover border border-gray-100 service-card"
            >
              {/* Service Image */}
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 
                           transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Icon */}
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-linear-to-br 
                 from-gray-900 to-gray-600 
                              rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <service.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-gray-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 shrink-0 mt-1.5"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-semibold flex items-center text-xs sm:text-sm
             hover:text-gray-900 transition-colors duration-300"
                >
                  Go TO Service
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-1.5 sm:ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
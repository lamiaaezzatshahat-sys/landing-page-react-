import React, { useEffect, useState } from 'react';
import { PlayCircle, TrendingUp, Shield, Globe } from 'lucide-react';
import software_img from '../assets/imgs/software.jpg';

const Hero = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section id="home" className="relative min-h-screen flex items-center 
                                 bg-white-section from-primary-dark via-primary-blue to-secondary-teal 
                                 overflow-hidden pt-12 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-8 relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <div className={`space-y-6 sm:space-y-8 ${animated ? 'animate-slide-up' : 'opacity-0'}`}>
           

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart Traffic <br />
              Computer Systems
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Smart Traffic Computer Systems (STCS) develops practical technology solutions for traffic analysis and logistics operations.
            </p>

            <p>We work with consultants, infrastructure projects, and logistics operators to build systems that simplify traffic data processing, improve operational visibility, and support better planning decisions.

           
            <br />
            Our focus is on creating reliable tools that combine traffic knowledge with modern software development, helping organizations manage complex mobility and logistics challenges more efficiently.
            <br />
            STCS aims to support the shift toward smarter infrastructure by delivering systems that turn raw data into clear and useful insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="btn-primary text-sm sm:text-base">
                <PlayCircle size={18} className="sm:w-5 sm:h-5" />
                Watch Demo
              </a>
              <a href="#services" className="btn-outline text-sm sm:text-base">
                Our Services
              </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className={`relative hidden lg:block ${animated ? 'animate-zoom-in' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src={software_img}
                alt="Smart Traffic Control Center"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-5 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-gray-500/10 
                            rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20 
                            animate-pulse"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-gray-700/10 
                            rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/20 
                            animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
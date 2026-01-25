import React, { useEffect, useState } from 'react';
import { PlayCircle, TrendingUp, Shield, Globe } from 'lucide-react';

const Hero = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '650+', label: 'Projects Completed', icon: TrendingUp },
    { number: '40%', label: 'Traffic Reduction', icon: TrendingUp },
    { number: '150+', label: 'Cities Worldwide', icon: Globe },
    { number: '99%', label: 'System Uptime', icon: Shield },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center 
                                 bg-white-section from-primary-dark via-primary-blue to-secondary-teal 
                                 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`space-y-8 ${animated ? 'animate-slide-up' : 'opacity-0'}`}>
           

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold  leading-tight">
              Smart Traffic
              <span className="block text-secondary-teal">Computer Systems</span>
            </h1>

            {/* Description */}
            <p className="text-xl  max-w-2xl">
              Transforming urban mobility through intelligent traffic systems, 
              real-time analytics, and cutting-edge engineering solutions for 
              smarter, safer cities worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <PlayCircle size={20} />
                Watch Demo
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className={`relative ${animated ? 'animate-zoom-in' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Smart Traffic Control Center"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute -top-5 -left-6 w-24 h-24 bg-secondary-teal/20 
                            rounded-2xl backdrop-blur-sm border border-white/20 
                            animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue/20 
                            rounded-2xl backdrop-blur-sm border border-white/20 
                            animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
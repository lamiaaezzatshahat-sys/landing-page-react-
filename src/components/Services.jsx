// components/Services.jsx
import React, { useEffect } from 'react';
import { 
  Car, Brain, BarChart3, Shield, 
  ParkingCircle, Bus, Wifi, Cloud 
} from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      title: 'Traffic Signal Systems',
      description: 'Design and optimization of adaptive traffic signal control systems.',
      features: ['Adaptive Signal Control', 'Coordinated Timing', 'Emergency Preemption'],
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Brain,
      title: 'AI Traffic Management',
      description: 'Intelligent traffic control using artificial intelligence and machine learning.',
      features: ['Traffic Prediction', 'Pattern Recognition', 'Anomaly Detection'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: BarChart3,
      title: 'Traffic Data Analytics',
      description: 'Comprehensive data collection and analysis using advanced sensors.',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Performance Reports'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Shield,
      title: 'Traffic Safety Systems',
      description: 'Advanced safety monitoring and accident prevention systems.',
      features: ['Safety Audits', 'Risk Analysis', 'Prevention Measures'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ParkingCircle,
      title: 'Smart Parking Solutions',
      description: 'Innovative parking management and guidance systems.',
      features: ['Parking Guidance', 'Space Detection', 'Mobile Payments'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Bus,
      title: 'Public Transport Systems',
      description: 'Efficient public transportation planning and management.',
      features: ['Route Optimization', 'Fleet Management', 'Passenger Info'],
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-section text-zinc-50 mt-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-blue 
                        font-semibold uppercase tracking-wider mb-4">
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
          >
            Comprehensive Traffic Solutions
          </ScrollFloat>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We deliver end-to-end traffic management systems powered by 
            technology and engineering excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg 
                        card-hover border border-gray-100 service-card"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 
                           transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-linear-to-r/srgb from-blue-900 to-slate-900 
                 from-primary-blue to-secondary-teal 
                              rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-primary-dark mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6  text-gray-700">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="text-primary-blue font-semibold flex items-center 
                                 hover:text-primary-dark transition-colors duration-300  text-gray-800">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" 
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
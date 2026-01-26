// components/ProgrammingServices.jsx
import React, { useEffect } from 'react';
import { 
  Code, Database, Cpu, Globe, 
  Smartphone, Cloud, GitBranch, Shield 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgrammingServices = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.programming-card');
    const infoCards = document.querySelectorAll('.info-card');
    
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#capabilities',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo(
      infoCards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#capabilities',
          start: 'bottom 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    // {
    //   icon: Code,
    //   title: 'Traffic Simulation',
    //   description: 'Custom traffic simulation software using Python and advanced algorithms',
    //   tech: ['Python', 'NumPy', 'Pandas', 'SimPy'],
    //   color: 'bg-blue-500',
    //   gradient: 'from-blue-500 to-cyan-500'
    // },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent traffic prediction using advanced ML models',
      tech: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV'],
      
    },
    {
      icon: Database,
      title: 'Database ',
      description: 'Scalable database solutions for traffic data storage and analysis',
      tech: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite']
    },
    
    // {
    //   icon: Globe,
    //   title: 'Frontend Web Development',
    //   description: 'Interactive traffic monitoring dashboards with real-time data',
    //   tech: [],
      
    // },
     {
      icon: Cloud,
      title: 'Web Development',
      description: 'Interactive traffic monitoring dashboards with real-time data',
      tech: ['Laravel', 'Django', 'Nestjs','React', 'Next.js', 'wordpress', 'js'],
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Traffic monitoring and reporting apps for field engineers',
      tech: ['React Native', 'Flutter', 'Firebase', 'GPS APIs'],
      color: 'bg-red-500',
      gradient: 'from-red-500 to-rose-500'
    },
   
];

  return (
    <section id="capabilities" className="py-12 sm:py-16 md:py-20 bg-dark-section from-primary-dark via-primary-blue to-secondary-teal">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-white  
                        font-semibold  tracking-wider mb-8 sm:mb-8 text-xs sm:text-sm">
            <h2 className='text-4xl sm:text-4xl md:text-4xl font-bold text-zinc-50 text-center mb-4'>Our Capabilities</h2>
          </div>
          <h6 className="text-2xl sm:text-2xl md:text-2xl  text-white mb-4 sm:mb-8">
            Our Team Capabilities in Programming 
          </h6>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Custom software development for advanced traffic management applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-100 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 
                        border border-white/20 card-hover programming-card"
            >
              {/* Icon */}
              <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl mb-3 sm:mb-6 flex items-center 
                            justify-center bg-dark-section shadow-lg bg-dark-section
                             text-white/80 border border-white/20 hover:opacity-50 
                             transition-colors duration-300`}>
                <service.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-6">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm
                              backdrop-blur-sm bg-dark-section text-white/80 border border-white/20 hover:opacity-50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learn More */}
              {/* <button className=" font-semibold flex items-center 
                               hover:text-secondary-teal transition-colors duration-300">
                View Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button> */}
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

export default ProgrammingServices;
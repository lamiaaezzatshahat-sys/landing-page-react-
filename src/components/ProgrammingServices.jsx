// components/ProgrammingServices.jsx
import React, { useEffect, useState } from 'react';
import { 
  Code, Database, Cpu, Globe, 
  Smartphone, Cloud, GitBranch, Shield 
} from 'lucide-react';

const ProgrammingServices = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('programming');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Traffic Simulation',
      description: 'Custom traffic simulation software using Python and advanced algorithms',
      tech: ['Python', 'NumPy', 'Pandas', 'SimPy'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Traffic Database Systems',
      description: 'Scalable database solutions for traffic data storage and analysis',
      tech: ['PostgreSQL', 'TimescaleDB', 'MongoDB', 'Redis'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Intelligent traffic prediction using advanced ML models',
      tech: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenCV'],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Dashboards',
      description: 'Interactive traffic monitoring dashboards with real-time data',
      tech: ['React', 'D3.js', 'WebSocket', 'Mapbox'],
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Traffic monitoring and reporting apps for field engineers',
      tech: ['React Native', 'Flutter', 'Firebase', 'GPS APIs'],
      color: 'bg-red-500',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for traffic data processing',
      tech: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="capabilities" className="py-20 
                  bg-gray-800 from-primary-dark via-primary-blue to-secondary-teal">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-white 
                        font-semibold uppercase tracking-wider mb-4">
            <div className="w-3 h-3 bg-secondary-teal rounded-full"></div>
            <span>Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Programming <span className="text-secondary-teal">Services</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Custom software development for advanced traffic management applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 
                        border border-white/20 card-hover
                        ${visible ? `animate-slide-up delay-${index * 100}` : 'opacity-0'}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl mb-6 flex items-center 
                            justify-center bg-gradient-to-br ${service.gradient}`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 mb-6">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm 
                             text-white/90 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learn More */}
              <button className="text-white font-semibold flex items-center 
                               hover:text-secondary-teal transition-colors duration-300">
                View Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className={`text-center ${visible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="w-20 h-20 bg-secondary-teal/20 rounded-2xl flex items-center 
                          justify-center mx-auto mb-6">
              <GitBranch className="w-10 h-10 text-secondary-teal" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Version Control</h4>
            <p className="text-white/80">
              Git-based workflow with automated testing and CI/CD pipelines
            </p>
          </div>

          <div className={`text-center ${visible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="w-20 h-20 bg-secondary-teal/20 rounded-2xl flex items-center 
                          justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-secondary-teal" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Security & Compliance</h4>
            <p className="text-white/80">
              Enterprise-grade security with industry compliance standards
            </p>
          </div>

          <div className={`text-center ${visible ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            <div className="w-20 h-20 bg-secondary-teal/20 rounded-2xl flex items-center 
                          justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10 text-secondary-teal" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Cloud Deployment</h4>
            <p className="text-white/80">
              Full-stack deployment on AWS, Azure, and Google Cloud platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingServices;
// components/Gallery.jsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import ShipHub_imgs from '../assets/imgs/serves/thailand_featured.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const galleryImages = [
    {
      id: 1,
      title: 'Traffic Control Center',
      description: '24/7 monitoring and control facility',
      category: 'Control Centers',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'AI Traffic Dashboard',
      description: 'Real-time traffic analytics platform',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Smart Traffic Sensors',
      description: 'Advanced IoT sensor installation',
      category: 'Hardware',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'ShipHub Service App',
      description: 'Real-time tracking of shipments for users and drivers',
      category: 'Software',
      image: ShipHub_imgs
    },
    {
      id: 5,
      title: 'Intelligent Intersections',
      description: 'Smart intersection management',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Traffic Data Analysis',
      description: 'Big data processing and analysis',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Smart Parking Systems',
      description: 'Automated parking management',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      title: 'Public Transport Integration',
      description: 'Multimodal transportation hub',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'All Projects' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  const openModal = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectedImage(null); // Close modal when filter changes
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-background-light">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 text-gray-700 
                        font-semibold uppercase tracking-wider mb-3 sm:mb-4 text-xs sm:text-sm">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
            <span>Our Work</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Project <span className="text-gray-700">Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4">
            See our innovative traffic solutions in action across different cities and applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          {['All Projects', 'Control Centers', 'Software', 'Hardware', 'Infrastructure'].map((filter) => {
            const count = filter === 'All Projects' 
              ? galleryImages.length 
              : galleryImages.filter(img => img.category === filter).length;
            
            return (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-900 hover:text-white shadow-sm hover:scale-105'
                }`}
              >
                {filter} ({count})
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl 
                         shadow-lg cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(index)}
              >
              {/* Image */}
              <div className="h-44 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover 
                           transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-gray-400 text-sm font-semibold">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                    <button className="bg-white/20 p-2 rounded-lg backdrop-blur-sm 
                                     hover:bg-white/30 transition-colors">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center 
                        bg-black/90 backdrop-blur-md p-4">
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 
                         transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 
                         bg-white/20 p-3 rounded-full hover:bg-white/30 
                         transition-colors backdrop-blur-sm"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                         bg-white/20 p-3 rounded-full hover:bg-white/30 
                         transition-colors backdrop-blur-sm"
              >
                <ChevronRight size={24} className="text-white" />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Info */}
              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg text-gray-300">{selectedImage.description}</p>
                <div className="mt-4 text-gray-400 font-semibold">
                  {selectedImage.category}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
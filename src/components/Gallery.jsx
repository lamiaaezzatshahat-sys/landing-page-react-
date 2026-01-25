// components/Gallery.jsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      title: 'Traffic Simulation',
      description: 'Virtual modeling and testing',
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1530539595977-0aa9890543c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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

  const openModal = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-blue 
                        font-semibold uppercase tracking-wider mb-4">
            <div className="w-3 h-3 bg-secondary-teal rounded-full"></div>
            <span>Our Work</span>
          </div>
          <h2 className="section-title">
            Project <span className="text-primary-blue">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our innovative traffic solutions in action across different cities and applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-primary-blue text-white rounded-full 
                           font-semibold hover:bg-primary-dark transition-colors">
            All Projects
          </button>
          {['Control Centers', 'Software', 'Hardware', 'Infrastructure'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white text-gray-700 rounded-full 
                       font-semibold hover:bg-primary-blue hover:text-white 
                       transition-colors shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl 
                       shadow-lg cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover 
                           transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 
                            to-transparent opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-secondary-teal text-sm font-semibold">
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
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center 
                        bg-black/90 backdrop-blur-md p-4">
            <div className="relative max-w-6xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-secondary-teal 
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
                <div className="mt-4 text-secondary-teal font-semibold">
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
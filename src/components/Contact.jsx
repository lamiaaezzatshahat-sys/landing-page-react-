// components/Contact.jsx
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, 
  Send, CheckCircle, AlertCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate API call
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '53 Dr Hasan El-Shareef, Al Manteqah Ath Thamenah, Nasr City, Cairo Governorate 4441576, Egypt',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+201227340564',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@smarttraffic.com',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'SAT-THU-: 8:00 AM - 6:00 PM',
      color: 'bg-orange-500'
    },
  ];

  const services = [
    'Traffic Engineering',
    'AI Traffic Systems',
    'Programming Services',
    'Consultation',
    'Maintenance',
    'Training'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary-blue 
                        font-semibold uppercase tracking-wider mb-4">
            <div className="w-3 h-3 bg-secondary-teal rounded-full"></div>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="text-primary-blue">Our Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can transform your traffic management systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-linear-to-br from-primary-dark to-primary-blue 
                          rounded-2xl p-8 text-gray-600 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 ">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex 
                                  items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-500">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4 border-b-black">
                  {['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-gray-200 flex items-center 
                               justify-center hover:bg-white/20 transition-colors rounded-r-lg"
                    >
                      <span className="font-semibold text-sm">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center 
                          justify-center">
              <div className="bg-gray-100 rounded-2xl  h-64 w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.547779118894!2d31.356464700000007!3d30.049829100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d6b4b4f0cc5%3A0x50969e53ec2f8860!2sE%20SPACES!5e0!3m2!1sen!2seg!4v1723063777146!5m2!1sen!2seg"
                  className="w-full h-full border-0- p-4 rounded-2xl"
                  allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
              </div>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              Send us a Message
            </h3>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 
                            text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-green-600">
                  Thank you for contacting us. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                               focus:border-primary-blue focus:ring-2 focus:ring-blue-200 
                               outline-none transition-all"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 
                               focus:border-primary-blue focus:ring-2 focus:ring-blue-200 
                               outline-none transition-all"
                      required
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                             focus:border-primary-blue focus:ring-2 focus:ring-blue-200 
                             outline-none transition-all"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-2 p-3 bg-white 
                                 rounded-lg border border-gray-300 cursor-pointer 
                                 hover:border-primary-blue transition-colors"
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={formData.service === service}
                          onChange={handleChange}
                          className="text-primary-blue"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                             focus:border-primary-blue focus:ring-2 focus:ring-blue-200 
                             outline-none transition-all resize-none"
                    required
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center py-4"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white 
                                    rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 
                                flex items-center space-x-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-600 text-sm">
                      There was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
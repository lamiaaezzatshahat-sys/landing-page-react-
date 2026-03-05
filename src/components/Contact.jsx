// components/Contact.jsx
import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock,
  Send, CheckCircle, AlertCircle
} from 'lucide-react';
import emailjs from "@emailjs/browser";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.send(
      "service_u5skmsc",
      "template_8k1z2gg",
      {
        name: formData.name,
        email: formData.email,
        title: formData.service,
        company: formData.company,
        message: formData.message,
      },
      "yyY4E9zjwoEFQa6iL"
    )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Abu Dhabi, United Arab Emirates',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+201069847600',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@smartaitraffic.com',
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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-gray-700 
                        font-semibold uppercase tracking-wider mb-3 sm:mb-4 text-xs sm:text-sm">
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
            Contact Our Team
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mt-3 sm:mt-4">
            Let's discuss how we can transform your traffic management systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 
                          rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 sm:w-12 h-10 sm:h-12 ${info.color} rounded-lg sm:rounded-xl flex 
                                  items-center justify-center shrink-0 bg-white/90 shadow-sm` }>
                      <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl h-48 sm:h-56 md:h-64 w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442118.5813968494!2d54.22896072524702!3d24.386473908627888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2seg!4v1772670334413!5m2!1sen!2seg"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
             
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send us a Message
            </h3>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-4 sm:p-6 
                            text-center animate-fade-in">
                <CheckCircle className="w-12 sm:w-16 h-12 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm sm:text-base text-green-600">
                  Thank you for contacting us. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 text-sm sm:text-base
                               focus:border-gray-600 focus:ring-2 focus:ring-gray-200 
                               outline-none transition-all"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
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
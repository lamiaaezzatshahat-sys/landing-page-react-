// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
// import Gallery from './components/Gallery';
import ProgrammingServices from './components/ProgrammingServices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      {/* <Gallery /> */}
      <ProgrammingServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
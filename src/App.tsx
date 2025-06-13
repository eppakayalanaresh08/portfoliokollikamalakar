import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Tools from './components/sections/Tools';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-600">KK</span>
          <span className="hidden md:block text-xl font-medium">Kollikamalakar</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-neutral-700 hover:text-green-600 transition-colors">
            About
          </a>
          <a href="#projects" className="text-neutral-700 hover:text-green-600 transition-colors">
            Projects
          </a>
          <a href="#certificates" className="text-neutral-700 hover:text-green-600 transition-colors">
            Certificates
          </a>
          <a href="#tools" className="text-neutral-700 hover:text-green-600 transition-colors">
            Tools
          </a>
          <a 
            href="https://www.instagram.com/kollikamalakar/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-md transition-all"
          >
            <Instagram size={18} />
            <span>Contact Now</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-neutral-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            <a 
              href="#about" 
              className="text-xl text-neutral-800 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-xl text-neutral-800 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
            <a 
              href="#certificates" 
              className="text-xl text-neutral-800 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Certificates
            </a>
            <a 
              href="#tools" 
              className="text-xl text-neutral-800 hover:text-green-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Tools
            </a>
            <a 
              href="https://www.instagram.com/kollikamalakar/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
              onClick={toggleMobileMenu}
            >
              <Instagram size={20} />
              <span>Contact Now</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
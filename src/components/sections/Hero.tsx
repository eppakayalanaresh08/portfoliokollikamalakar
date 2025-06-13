import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block">Kolli</span>
          <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
          kaMalakar
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Graphic Designer | Photographer | Creative Artist
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
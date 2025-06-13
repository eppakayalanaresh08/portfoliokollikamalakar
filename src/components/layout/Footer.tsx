import React from 'react';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-500">KM</span>
              <span className="text-xl font-medium">Kollikamalakar</span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              Graphic designer with 2 years of experience specializing in poster designs, 
              logos, photo edits, and creative illustrations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-neutral-400 hover:text-green-500 transition-colors">About Me</a>
              <a href="#projects" className="text-neutral-400 hover:text-green-500 transition-colors">Projects</a>
              <a href="#certificates" className="text-neutral-400 hover:text-green-500 transition-colors">Certificates</a>
              <a href="#tools" className="text-neutral-400 hover:text-green-500 transition-colors">Tools & Skills</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://www.instagram.com/kollikamalakar/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={18} />
                <span>@kollikamalakar</span>
              </a>
              <a 
                href="mailto:kollikamalakar@gmail.com" 
                className="flex items-center gap-2 text-neutral-400 hover:text-green-500 transition-colors"
              >
                <Mail size={18} />
                <span>kollikamalakar@gmail.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-neutral-400 hover:text-green-500 transition-colors"
              >
                <Phone size={18} />
                <span>+918985009723</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Kollikamalakar. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
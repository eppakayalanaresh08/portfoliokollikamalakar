import React from 'react';
import { Book, PenTool, Camera, Award } from 'lucide-react';

import Profile from './../../assets/profile.JPG'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-green-500 rounded-lg"></div>
              <img 
                src={Profile}
                alt="Kollikamalakar working on design" 
                className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">Hi, I'm Kollikamalakar</h3>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              I'm a graphic designer with 2 years of experience in the design field. My journey in visual arts has equipped me with skills in creating impactful poster designs, memorable logos, and creative photo edits. I also enjoy drawing portraits and exploring photography as a hobby.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              I constantly seek inspiration through motivational and inspiring books, as well as exploring the core fundamentals of design. My goal is to combine technical expertise with creative vision to deliver designs that leave a lasting impression.
            </p>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <PenTool className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Design</h4>
                  <p className="text-sm text-neutral-600">Posters, Logos, Ad Creatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Camera className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Photography</h4>
                  <p className="text-sm text-neutral-600">Portraits, Landscapes, Creative</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-sm text-neutral-600">2+ Years of Professional Work</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Book className="text-green-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold mb-1">Learning</h4>
                  <p className="text-sm text-neutral-600">Design Theory, Inspiration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
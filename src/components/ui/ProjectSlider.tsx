import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Info } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectSliderProps {
  projects: Project[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    setShowInfo(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    setShowInfo(false);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  if (projects.length === 0) {
    return <div className="text-center py-12 text-neutral-500">No projects to display in this category.</div>;
  }

  const currentProject = projects[currentIndex];

  return (
    <div className="relative">
      {/* Main image container */}
      <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {/* Main image */}
          <img 
            src={currentProject.image} 
            alt={currentProject.title} 
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          {/* Info overlay */}
          <div 
            className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${
              showInfo ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
            <p className="text-neutral-300 mb-4">{currentProject.description}</p>
            {currentProject.link && (
              <a 
                href={currentProject.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300"
              >
                <span>View Project</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4 px-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-neutral-600 font-medium">{currentIndex + 1}/{projects.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleInfo}
              className={`p-2 rounded-full transition-colors ${
                showInfo 
                  ? 'bg-green-600 text-white' 
                  : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
              }`}
              aria-label="Toggle project information"
            >
              <Info size={18} />
            </button>
            <button 
              onClick={prevSlide} 
              className="p-2 bg-neutral-200 text-neutral-600 rounded-full hover:bg-neutral-300 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 bg-neutral-200 text-neutral-600 rounded-full hover:bg-neutral-300 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Preview thumbnails */}
      <div className="mt-6 hidden md:grid grid-cols-5 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setShowInfo(false);
            }}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex 
                ? 'border-green-500 shadow-md' 
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
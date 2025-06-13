import React, { useState } from 'react';
import ProjectSlider from '../ui/ProjectSlider';
import { projectsData } from '../../data/projects';

type Category = 'posters' | 'ads' | 'photoEdits' | 'drawings' | 'photography';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('posters');

  const categories = [
    { id: 'posters', label: 'Poster Designs' },
    { id: 'ads', label: 'Ad Creatives' },
    { id: 'photography', label: 'Photography' },
    { id: 'drawings', label: 'Logos' },
    // { id: 'photography', label: 'Photography' },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Explore my creative work across different categories. Each project represents my passion for visual storytelling and attention to detail.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project slider for active category */}
        <div className="mt-8">
          <ProjectSlider projects={projectsData[activeCategory]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
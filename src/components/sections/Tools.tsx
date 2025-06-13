import React from 'react';
import { toolsData } from '../../data/tools';

const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools & Software</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-neutral-400">
            Professional tools I use to bring creative ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {toolsData.map((tool, index) => (
            <div 
              key={index} 
              className="bg-neutral-800 rounded-lg p-6 text-center transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-900/20"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <tool.icon size={48} className={`text-${tool.color}`} />
              </div>
              <h3 className="font-medium text-lg mb-1">{tool.name}</h3>
              <p className="text-neutral-400 text-sm">{tool.category}</p>
              
              {/* Proficiency bar */}
              <div className="mt-4 bg-neutral-700 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${tool.color}`}
                  style={{ width: `${tool.proficiency}%` }}
                ></div>
              </div>
              <p className="text-neutral-400 text-xs mt-2">{tool.proficiency}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
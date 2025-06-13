import React from 'react';
import { certificatesData } from '../../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Formal recognition of my skills and professional development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <div 
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{certificate.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{certificate.issuer}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-neutral-500">{certificate.date}</span>
                      {certificate.url && (
                        <a 
                          href={certificate.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-green-600 hover:text-green-700"
                        >
                          <span>View</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
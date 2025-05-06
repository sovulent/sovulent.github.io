import React from 'react';

const stats = [
  { value: '42+', label: 'CYBER MISSIONS' },
  { value: '98%', label: 'SUCCESS RATE' },
  { value: '24/7', label: 'ACTIVE SUPPORT' },
  { value: '5.2K', label: 'CERTIFIED AGENTS' }
];

const StatsBanner: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-terminal-dark rounded-lg p-6 text-center shadow-terminal border border-terminal-green/20 hover-scale transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-pixel text-terminal-green mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-sans uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

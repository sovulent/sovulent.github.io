import React from 'react';

// Feature data
const features = [
  {
    icon: '⌨️',
    title: 'HANDS-ON LABS',
    description: 'Practice in real-world scenarios with our interactive environments.'
  },
  {
    icon: '📊',
    title: 'SKILL TRACKING',
    description: 'Monitor your progress with detailed performance analytics.'
  },
  {
    icon: '👥',
    title: 'AGENT NETWORK',
    description: 'Connect with other cyber agents to share tactics and strategies.'
  },
  {
    icon: '🏆',
    title: 'CERTIFICATIONS',
    description: 'Earn industry-recognized credentials as you complete missions.'
  },
  {
    icon: '⏱️',
    title: 'LIVE SCENARIOS',
    description: 'Participate in timed challenges that simulate real-world threats.'
  },
  {
    icon: '🛡️',
    title: 'EXPERT BACKUP',
    description: 'Get 24/7 support from veteran security professionals.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 border-y border-terminal-green/30" style={{ backgroundColor: "#141D2B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with stylized divider */}
        <div className="relative py-6 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-500/40 shadow-[0_0_5px_rgba(0,255,136,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#141D2B] px-6 text-sm font-mono text-green-400 tracking-wider">
              //// AGENT_FEATURES ////
            </span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel text-terminal-green mb-4">AGENT_FEATURES</h2>
          <div className="pixel-divider w-32 mx-auto mb-4"></div>
          <p className="text-lg text-terminal-green/80 max-w-2xl mx-auto">
            Our cybersecurity platform offers cutting-edge training in a retro pixel environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 border-2 border-dashed border-terminal-green/40 hover:border-solid hover:border-cyber-blue transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-terminal-black rounded-lg border border-terminal-green/50 flex items-center justify-center">
                <div className="text-4xl text-cyber-blue">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-pixel text-terminal-green mb-3">{feature.title}</h3>
              <p className="text-terminal-green/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Terminal-style section divider */}
      <div className="max-w-6xl mx-auto my-12 px-4">
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-500/40 shadow-[0_0_5px_rgba(0,255,136,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#141D2B] px-4 text-sm font-VT323 text-green-400 tracking-wider">
              //// TRAINING PROTOCOLS ////
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

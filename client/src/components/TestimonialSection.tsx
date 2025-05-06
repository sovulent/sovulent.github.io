import React from 'react';

// Testimonial data
const testimonials = [
  {
    quote: "Code-Zero's training prepared me for real cybersecurity challenges better than my four-year degree program.",
    initials: "AK",
    name: "Agent_Kira",
    title: "Security Analyst",
    colorClass: "text-cyber-blue",
    borderClass: "border-cyber-blue"
  },
  {
    quote: "The pixel-based approach to learning complex security concepts made difficult subjects fun and engaging.",
    initials: "DX",
    name: "D4rk_X3N0",
    title: "Penetration Tester",
    colorClass: "text-neon-pink",
    borderClass: "border-neon-pink"
  },
  {
    quote: "I landed my dream cybersecurity job within two weeks of completing the Code-Zero advanced mission track.",
    initials: "BG",
    name: "ByteGuardian",
    title: "Threat Hunter",
    colorClass: "text-terminal-green",
    borderClass: "border-terminal-green"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-terminal-dark py-16 border-t border-terminal-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with stylized divider */}
        <div className="relative py-6 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-500/40 shadow-[0_0_5px_rgba(0,255,136,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-terminal-dark px-6 text-sm font-mono text-green-400 tracking-wider">
              //// AGENT_TESTIMONIALS ////
            </span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-pixel text-terminal-green mb-4">AGENT_TESTIMONIALS</h2>
          <div className="pixel-divider w-32 mx-auto mb-4"></div>
          <p className="text-lg text-terminal-green/80 max-w-2xl mx-auto">
            Reports from the field by our trained cyber agents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-terminal-black p-6 border-l-4 ${testimonial.borderClass} relative`}>
              <div className={`absolute -top-3 -left-3 ${testimonial.colorClass} text-4xl`}>"</div>
              <p className="text-terminal-green/80 mb-4 pt-4">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-terminal-dark border border-terminal-green/50 flex items-center justify-center mr-3">
                  <span className={testimonial.colorClass + " font-pixel"}>{testimonial.initials}</span>
                </div>
                <div>
                  <div className="text-terminal-green font-pixel">{testimonial.name}</div>
                  <div className="text-sm text-terminal-green/60">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React, { useState, useEffect } from 'react';

// Terminal initialization messages
const terminalMessages = [
  '> INITIATING CYBER OPS PROTOCOL…',
  '> TACTICAL MISSION MODULES LOADED',
  '> READY FOR DEPLOYMENT'
];

interface AnimatedWelcomeHeaderProps {
  className?: string;
}

const AnimatedWelcomeHeader: React.FC<AnimatedWelcomeHeaderProps> = ({ className = '' }) => {
  // State for typewriter effect
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  
  const fullText = "WELCOME, AGENT";
  
  // Handle the typewriter effect for main title
  useEffect(() => {
    // Show access granted animation first
    setTimeout(() => {
      setAccessGranted(true);
      
      // Then hide it after a short time
      setTimeout(() => {
        setAccessGranted(false);
        
        // Start typing animation
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            
            // Begin showing terminal lines one by one
            setVisibleLines([0]);
            
            // Show subsequent lines with delay
            const lineIntervals = terminalMessages.map((_, index) => {
              if (index === 0) return null; // First line is already visible
              
              return setTimeout(() => {
                setVisibleLines(prev => [...prev, index]);
              }, index * 800); // Staggered delay for each line
            });
            
            return () => {
              lineIntervals.forEach(interval => {
                if (interval) clearTimeout(interval);
              });
            };
          }
        }, 100); // Speed of typing
        
        return () => clearInterval(typingInterval);
      }, 1000);
    }, 800);
  }, []);
  
  // Handle blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <div className={`${className} relative`}>
      {/* Access Granted Alert */}
      <div 
        className={`absolute top-0 left-0 right-0 transition-all duration-300 transform ${
          accessGranted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-terminal-green/10 border border-terminal-green py-2 px-4 mb-4 text-center">
          <span className="font-pixel text-terminal-green animate-blink">ACCESS GRANTED</span>
        </div>
      </div>
      
      {/* Main Header Container with neon frame - Dark blue glass effect */}
      <div className="relative border-2 border-terminal-green/60 p-6 hover-glow-green crt-overlay shadow-glow" 
          style={{ 
            backgroundColor: "rgba(16, 24, 48, 0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "inset 0 0 30px rgba(30, 64, 175, 0.15)"
          }}>
          
        {/* System Header diagnostic element */}
        <div className="absolute top-2 left-2 text-xs font-VT323 font-mono text-terminal-green/80">
          [ SYSTEM HEADER ▸ CODE-ZERO OPS ENV v3.4.2 ]
        </div>
        {/* Wireframe border corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terminal-green"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terminal-green"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terminal-green"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terminal-green"></div>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 scanline opacity-10"></div>
        
        {/* Main heading with typewriter effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-pixel text-terminal-green tracking-wide mb-6 relative">
          {displayText}
          <span 
            className={`inline-block w-5 h-8 bg-terminal-green translate-y-1 ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </h1>
        
        {/* Terminal messages that appear one by one */}
        <div className="font-mono text-left space-y-2">
          {terminalMessages.map((message, index) => (
            <div 
              key={index}
              className={`transition-all duration-300 transform ${
                visibleLines.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg font-mono text-green-300 tracking-wide">
                {message}
              </p>
            </div>
          ))}
          
          {/* Command prompt line with blinking cursor */}
          <div className={`mt-4 transition-all duration-300 transform ${
            visibleLines.length === terminalMessages.length
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}>
            <p className="text-terminal-green/80 font-mono tracking-wider text-left flex items-center">
              <span className="text-terminal-green mr-2">$</span>
              <span className={`inline-block w-3 h-5 bg-terminal-green ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWelcomeHeader;
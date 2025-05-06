import React, { useState, useEffect } from 'react';

const CTASection: React.FC = () => {
  const [showTerminalLog, setShowTerminalLog] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [terminalVisible, setTerminalVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Handle the fake terminal log display
  const handleEnlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTerminalLog(true);
    setTerminalVisible(true);
    setTerminalLines([]);
    
    // Display terminal logs with delay for typing effect
    setTimeout(() => {
      setTerminalLines(prev => [...prev, "> Request sent to recruitment_ops@codezero.agency"]);
      
      setTimeout(() => {
        setTerminalLines(prev => [...prev, "> Stand by for agent verification..."]);
        
        setTimeout(() => {
          setTerminalLines(prev => [...prev, "> Clearance level evaluation in progress"]);
          
          setTimeout(() => {
            setTerminalLines(prev => [...prev, "> Generating secure channel"]);
            
            setTimeout(() => {
              setTerminalLines(prev => [...prev, "> A recruiter will contact you shortly"]);
            }, 800);
          }, 800);
        }, 1000);
      }, 800);
    }, 400);
  };
  
  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-terminal-black border-2 border-terminal-green/50 p-8 md:p-12 relative overflow-hidden" style={{ boxShadow: "inset 0 0 20px rgba(0, 255, 136, 0.1)" }}>
          {/* Fake HUD header */}
          <div className="absolute top-0 left-0 right-0 bg-terminal-black border-b border-terminal-green/50 py-2 px-4 flex items-center">
            <span className="text-terminal-green/80 font-mono text-xs tracking-wide">
              [ ACCESS NODE: RECRUIT_PROTOCOL_ACTIVE ]
            </span>
            <div className="ml-auto flex items-center">
              <div className="w-2 h-2 rounded-full bg-terminal-green/60 animate-pulse mr-2"></div>
              <span className="text-terminal-green/60 font-mono text-xs">ONLINE</span>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-blue/10 transform rotate-45 -translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10 mt-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-pixel text-terminal-green mb-6">READY_TO_JOIN_THE_MISSION?</h2>
              <p className="text-lg text-terminal-green/80 max-w-2xl mx-auto mb-8">
                Become part of our elite cyber agent network and gain the skills needed to defend against digital threats.
              </p>
              
              {!showTerminalLog ? (
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button 
                    onClick={handleEnlistClick} 
                    className="bg-neon-pink relative overflow-hidden text-terminal-black font-sans font-bold tracking-wide py-3 px-8 inline-block rounded 
                      animate-pulse-slow border border-neon-pink/50 
                      before:absolute before:inset-0 before:border-2 before:border-neon-pink/0 hover:before:border-neon-pink/100 before:transition-all"
                    style={{ boxShadow: "0 0 15px rgba(255, 41, 117, 0.5)" }}
                  >
                    ENLIST NOW
                  </button>
                  <a 
                    href="#" 
                    className="bg-terminal-dark border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 font-sans font-bold tracking-wide py-3 px-8 inline-block rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                  >
                    REQUEST INTEL
                  </a>
                </div>
              ) : (
                <div className="max-w-lg mx-auto bg-terminal-black border border-terminal-green/60 rounded p-4 text-left">
                  <div className="flex items-center mb-2 text-xs text-terminal-green/80 font-mono">
                    <span className="mr-2">$</span>
                    <span>terminal@code-zero:~</span>
                  </div>
                  <div className="h-40 font-mono text-sm">
                    {terminalLines.map((line, index) => (
                      <div key={index} className="mb-2 text-terminal-green/90">
                        {line}
                      </div>
                    ))}
                    <div className="flex items-center text-terminal-green/90">
                      <span className="mr-2">$</span>
                      <span className={`inline-block w-2 h-4 bg-terminal-green ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

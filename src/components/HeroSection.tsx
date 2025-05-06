import React, { useState, useEffect } from 'react';
import { ScanLine } from '@/assets/ScanLine';
import { ArrowRight, BarChart2, Eye, Shield, Terminal, Monitor } from 'lucide-react';
import ThreatFeed from './ThreatFeed';
import MissionDecoder from './MissionDecoder';
import AgentCodename from './AgentCodename';
import AnimatedWelcomeHeader from './AnimatedWelcomeHeader';

const HeroSection: React.FC = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const welcomeText = "Initiate Cyber Training";
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  
  const terminalLines = [
    '> System initialized',
    '> Establishing secure connection...',
    '> Scanning for vulnerabilities...',
    '> Network analysis complete',
    '> Loading training modules...',
    '> All systems operational',
    '> Ready for deployment',
  ];

  // Type-writing animation effect
  useEffect(() => {
    if (typedText.length < welcomeText.length) {
      const timeout = setTimeout(() => {
        setTypedText(welcomeText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Animate terminal lines
  useEffect(() => {
    if (activeLineIndex < terminalLines.length - 1) {
      const timeout = setTimeout(() => {
        setActiveLineIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [activeLineIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" style={{ background: "#0E1B24" }}>
      {/* Cybersecurity HUD Container with neon green frame - transparent background */}
      <div className="relative bg-transparent border-2 border-terminal-green/50 shadow-glow" 
           style={{ boxShadow: "0 0 20px rgba(0, 255, 136, 0.1)" }}>
        {/* Wireframe border corners - for the entire container */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terminal-green z-10"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terminal-green z-10"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terminal-green z-10"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terminal-green z-10"></div>
        
        {/* HUD Section Header */}
        <div className="bg-terminal-black/30 backdrop-blur-sm py-1 border-b border-terminal-green/30 px-4 flex items-center">
          <Monitor className="h-4 w-4 text-terminal-green mr-2" />
          <span className="text-xs text-terminal-green/80 font-pixel tracking-wider">CYBER-HUD DISPLAY v2.3.4</span>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-terminal-green/60 animate-pulse"></div>
            <span className="text-xs text-terminal-green/60 font-mono">LIVE</span>
          </div>
        </div>
        
        {/* Integrated Threat Feed */}
        <ThreatFeed />
      
        <section className="relative py-8 md:py-10 overflow-hidden">
          {/* Subtle grid background overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FF88' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Animated Cinematic Welcome Header */}
            <div className="mb-8 relative">
              <div className="absolute top-0 right-0 md:right-10 z-10">
                <AgentCodename fixedName="BYTE_GUARDIAN" />
              </div>
              
              <div className="flex flex-col items-center">
                <AnimatedWelcomeHeader className="max-w-3xl w-full mb-6" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8 items-start">
              <div className="rounded-lg shadow-xl overflow-hidden border border-terminal-green/30 order-2 lg:order-1 relative pulsing-terminal"
                   style={{ 
                     backgroundColor: "rgba(32, 32, 35, 0.95)",
                     boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)"
                   }}>
                <div className="h-8 bg-terminal-black border-b border-terminal-green/20 flex items-center px-3">
                  <div className="w-3 h-3 rounded-full bg-alert-red mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-green/60 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-success-green/70 mr-2"></div>
                  <div className="text-xs text-terminal-green/70 ml-2 font-mono flex items-center">
                    <Terminal className="h-3 w-3 mr-1.5" />
                    terminal@code-zero:~
                  </div>
                </div>
                
                <div className="relative p-6 h-60 md:h-72 terminal-flicker" 
                     style={{ position: "relative" }}>
                  {/* Enhanced scanline effect */}
                  <div className="absolute inset-0 pointer-events-none z-10"
                       style={{
                         background: "linear-gradient(transparent, transparent 1px, rgba(0,0,0,0.1) 1px, transparent 2px)",
                         backgroundSize: "100% 2px",
                         opacity: "0.3"
                       }}></div>
                  {/* Pixel Agent Image - SVG representation of a pixel art agent */}
                  <div className="absolute right-6 top-6 opacity-40 w-32 h-32">
                    <svg width="64" height="64" viewBox="0 0 64 64" className="w-full h-full">
                      <g transform="scale(2)">
                        {/* Pixel art cyber agent with better details */}
                        <rect x="12" y="4" width="8" height="8" fill="#00ff88" />
                        <rect x="10" y="6" width="2" height="8" fill="#00ff88" />
                        <rect x="20" y="6" width="2" height="8" fill="#00ff88" />
                        <rect x="8" y="10" width="16" height="4" fill="#00ff88" />
                        <rect x="12" y="14" width="8" height="4" fill="#00ff88" />
                        <rect x="10" y="18" width="12" height="2" fill="#00ff88" />
                        <rect x="8" y="20" width="16" height="2" fill="#00ff88" />
                        <rect x="12" y="22" width="2" height="4" fill="#00ff88" />
                        <rect x="18" y="22" width="2" height="4" fill="#00ff88" />
                        {/* Visor */}
                        <rect x="12" y="8" width="8" height="2" fill="#FF2A6D" />
                        {/* Details */}
                        <rect x="14" y="6" width="4" height="2" fill="#FF2A6D" />
                        <rect x="8" y="12" width="2" height="2" fill="#FF2A6D" />
                        <rect x="22" y="12" width="2" height="2" fill="#FF2A6D" />
                      </g>
                    </svg>
                  </div>
                  
                  {/* Terminal lines */}
                  <div className="text-terminal-green/80 text-sm font-mono font-light h-full flex flex-col justify-start">
                    {terminalLines.slice(0, activeLineIndex + 1).map((line, index) => (
                      <div key={index} className={`${index === activeLineIndex ? 'text-terminal-green' : ''} mb-2`}>
                        {line}
                      </div>
                    ))}
                    
                    <div className="mt-4 flex items-center">
                      <span className="text-terminal-green mr-2 font-mono">$</span>
                      <span className="text-terminal-green font-mono">{typedText}</span>
                      <span className={`inline-block w-2 h-4 bg-terminal-green ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                    </div>
                  </div>
                  
                  {/* Terminal scan line effect */}
                  <ScanLine />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-lg p-5 md:p-6 shadow-terminal border border-terminal-green/30 relative pulsing-terminal"
                     style={{ 
                       backgroundColor: "rgba(12, 40, 20, 0.85)", 
                       backdropFilter: "blur(8px)",
                       boxShadow: "inset 0 0 30px rgba(0, 255, 136, 0.08)" 
                     }}>
                  <h2 className="text-2xl font-pixel text-terminal-green mb-3 relative">
                    <span className="inline-block animate-pulse mr-2">&gt;</span>
                    MISSION BRIEFING
                  </h2>
                  <p className="text-gray-300 mb-4 font-sans">
                    As a cyber agent trainee, you'll master vital security skills through hands-on tactical missions. From encryption to threat analysis, our platform will prepare you for real-world challenges.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <MissionDecoder missionId="intro" />
                    
                    <a 
                      href="#" 
                      className="pixel-btn border border-terminal-green/50 hover:border-terminal-green/80 hover-glow-green text-terminal-green font-pixel py-2 px-5 rounded text-sm uppercase tracking-wide flex-none transition-all duration-200 hover:-translate-y-0.5 text-center"
                    >
                      View Curriculum
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4 mb-2 border-t border-b border-terminal-green/20 py-2">
                    <div className="flex flex-col items-center text-center p-2">
                      <Shield className="h-5 w-5 text-terminal-green mb-1" />
                      <div className="text-xs text-gray-300 font-sans">Security Rating</div>
                      <div className="text-sm text-terminal-green font-pixel mt-1">92%</div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-2">
                      <BarChart2 className="h-5 w-5 text-terminal-green mb-1" />
                      <div className="text-xs text-gray-300 font-sans">Difficulty</div>
                      <div className="text-sm text-terminal-green font-pixel mt-1">TRAINEE</div>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-2">
                      <Eye className="h-5 w-5 text-terminal-green mb-1" />
                      <div className="text-xs text-gray-300 font-sans">Active Agents</div>
                      <div className="text-sm text-terminal-green font-pixel mt-1">1,337</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                    <AgentCodename />
                    <div className="text-terminal-green/70 font-VT323 flex items-center">
                      <span className="mr-2">[ HASH: #5FF003A7 ]</span>
                      <div className="text-terminal-green/60 animate-blink">●</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* HUD Footer Status Bar */}
        <div className="bg-terminal-black/30 backdrop-blur-sm py-1 border-t border-terminal-green/30 px-4 flex items-center text-xs">
          <span className="text-terminal-green/60 font-mono">SYSTEM STATUS:</span>
          <span className="text-terminal-green/80 font-mono ml-2">OPERATIONAL</span>
          <div className="ml-auto text-terminal-green/60 font-mono flex items-center">
            <div className="w-2 h-2 rounded-full bg-terminal-green mr-2 animate-blink"></div>
            SECURE CONNECTION ACTIVE
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto my-12 px-4">
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-500/40 shadow-[0_0_5px_rgba(0,255,136,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0F2622] px-4 text-sm font-VT323 text-green-400 tracking-wider">
              //// MISSION BRIEFINGS ////
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

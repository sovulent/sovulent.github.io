import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, Terminal, Shield, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [cursorVisible, setCursorVisible] = useState(true);
  const [caretVisible, setCaretVisible] = useState(true);
  const [statusMode, setStatusMode] = useState('SECURE');
  
  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    const caretInterval = setInterval(() => {
      setCaretVisible(prev => !prev);
    }, 800);
    
    // Simulate random status mode changes
    const statusInterval = setInterval(() => {
      const statuses = ['SECURE', 'ACTIVE', 'PENDING', 'SCANNING'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setStatusMode(randomStatus);
    }, 5000);
    
    return () => {
      clearInterval(cursorInterval);
      clearInterval(caretInterval);
      clearInterval(statusInterval);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Helper function to determine if nav item is active
  const isActive = (path: string) => {
    return location === path;
  };
  
  return (
    <nav className="bg-terminal-black border-b border-terminal-green/30 sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      {/* Hex grid background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0L39.9 3.414 42.314 0h-2.83zM66.284 0L63.9 3.414 66.314 0h-2.83zM30 0L20.657 9.343 32.343 21.03 30 23.372l-9.343-9.343L0 34.686 21.03 55.717l-9.343 9.343 1.414 1.414L30 48.686l17.9 17.9 1.413-1.415L30 45.313l-8.556 8.556L0 32.544l10.97-10.97L30 10.686 40.97 21.657l-9.9 9.9 1.415 1.413 9.343-9.343L60 42.686 48.686 54 60 65.314l-21.03-21.03 9.343-9.342-1.414-1.414L30 50.142l-8.556-8.556L0 20.457 10.97 9.487l9.9-9.9L39.313 0h-2.83L30 5.657 20.657 0h2.83L30 6.828 36.485 0h-2.83L30 3.657 25.515 0h2.83L30 2.486 32.344 0h-2.93zM60 54.142l9.9 9.9L60 60.485l-9.9 9.9-1.414-1.415L60 56.97l-9.9-9.9 1.414-1.414L60 54.142zM39.9 3.414L30 9.485l-9.9-5.657L30 0l9.9 3.414zm-3.415 31.97l-2.475 2.476L21.03 24.9l-1.414 1.42L32.97 40.67l-2.475-2.474 9.9-9.9 1.414 1.413L30 41.6l-8.556-8.556L0 11.515 1.414 10.1 30 38.688l9.9-9.9 1.414 1.413-2.475 2.475-1.415-1.416z' fill='%2300FF88' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Animated scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-scanline w-full h-full opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16">
          {/* Left side - Logo with Terminal Prefix */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div 
                className="flex items-center px-3 py-1 rounded-sm" 
                style={{ 
                  boxShadow: 'inset 0 0 4px #00FF88, 0 0 8px rgba(0, 255, 136, 0.2)',
                  background: 'rgba(0, 20, 40, 0.4)'
                }}
              >
                <Terminal className="h-4 w-4 mr-2 text-terminal-green" />
                <div className="text-terminal-green font-mono text-xl tracking-wider flex items-center border-r border-terminal-green/30 pr-2 mr-2">
                  <span className="text-terminal-green/90">
                    SYSTEM@ZERO 
                    <span className={`${caretVisible ? 'opacity-100' : 'opacity-30'} transition-opacity duration-200 animate-pulse-slow`}>▸</span>
                  </span>
                </div>
                <div className="text-terminal-green font-mono text-xl tracking-wide flex items-center">
                  <span className="text-terminal-green">CODE</span>
                  <span className="text-neon-pink">-</span>
                  <span className="text-terminal-green">ZERO</span>
                </div>
              </div>
            </div>
            
            {/* Status indicator */}
            <div className="hidden md:flex ml-4 items-center text-[10px] font-mono text-terminal-green/70">
              <Shield className="h-3 w-3 mr-1" />
              <span>STATUS: </span>
              <span className={`ml-1 ${
                statusMode === 'SECURE' ? 'text-terminal-green' : 
                statusMode === 'SCANNING' ? 'text-cyber-blue animate-pulse' : 
                statusMode === 'PENDING' ? 'text-neon-pink' : 'text-terminal-green'
              }`}>
                {statusMode}
              </span>
              {(statusMode === 'ACTIVE' || statusMode === 'SCANNING') && (
                <Activity className="h-3 w-3 ml-1 text-terminal-green animate-pulse" />
              )}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-3">
            {[
              { path: '/', label: 'HOME' },
              { path: '/curriculum', label: 'CURRICULUM' },
              { path: '/progress', label: 'PROGRESS' },
              { path: '/about', label: 'ABOUT' }
            ].map((item) => (
              <Link key={item.path} href={item.path}>
                <div 
                  className={`
                    border border-terminal-green/40 
                    ${isActive(item.path) ? 'bg-[#0D1A2B] text-terminal-green' : 'bg-[#0D1A2B]/30 text-terminal-green/80'} 
                    px-3 py-1.5 text-sm font-mono cursor-pointer uppercase flex items-center transition-all duration-200
                    hover:border-terminal-green hover:scale-105 hover:bg-[#0D1A2B] 
                    ${isActive(item.path) ? 'shadow-[0_0_10px_rgba(0,255,136,0.15)]' : ''}
                  `}
                  style={{ 
                    transform: isActive(item.path) ? 'translateY(-1px)' : 'none',
                    textShadow: isActive(item.path) ? '0 0 5px rgba(0, 255, 136, 0.3)' : 'none' 
                  }}
                >
                  <span>{item.label}</span>
                  {isActive(item.path) && (
                    <span 
                      className={`ml-1 inline-block w-2 h-4 bg-terminal-green ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                    ></span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 text-terminal-green hover:text-terminal-green border border-terminal-green/40 hover:border-terminal-green bg-[#0D1A2B]/30 hover:bg-[#0D1A2B]"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              style={{ boxShadow: mobileMenuOpen ? '0 0 10px rgba(0, 255, 136, 0.2)' : 'none' }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden border-t border-terminal-green/30`}
        style={{ 
          background: 'rgba(10, 20, 30, 0.95)',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)' 
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-2">
          {[
            { path: '/', label: 'HOME' },
            { path: '/curriculum', label: 'CURRICULUM' },
            { path: '/progress', label: 'PROGRESS' },
            { path: '/about', label: 'ABOUT' }
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <div 
                className={`
                  block px-3 py-2 text-base font-mono cursor-pointer border border-terminal-green/20
                  ${isActive(item.path) 
                    ? 'bg-[#0D1A2B] text-terminal-green border-terminal-green/50' 
                    : 'text-terminal-green/70 hover:bg-[#0D1A2B]/50 hover:text-terminal-green'
                  }
                  flex items-center justify-between
                `}
              >
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className={`inline-block w-2 h-4 bg-terminal-green ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                )}
              </div>
            </Link>
          ))}
          
          {/* Mobile status indicator */}
          <div className="border-t border-terminal-green/20 pt-2 mt-2 px-3 flex items-center text-xs font-mono text-terminal-green/70">
            <Shield className="h-3 w-3 mr-1" />
            <span>STATUS: </span>
            <span className={`ml-1 ${
              statusMode === 'SECURE' ? 'text-terminal-green' : 
              statusMode === 'SCANNING' ? 'text-cyber-blue animate-pulse' : 
              statusMode === 'PENDING' ? 'text-neon-pink' : 'text-terminal-green'
            }`}>
              {statusMode}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

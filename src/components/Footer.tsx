import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Github, Dribbble, Shield, Activity, Clock, Users } from 'lucide-react';

const LiveSystemStatus: React.FC = () => {
  const [agentCount, setAgentCount] = useState(1337);
  const [timeRemaining, setTimeRemaining] = useState('04:12:27');
  const [systemStatus, setSystemStatus] = useState('ONLINE');
  const [countDirection, setCountDirection] = useState(1);
  
  // Simulate changing agent count
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentCount(prev => {
        // Change direction occasionally
        if (Math.random() > 0.95) {
          setCountDirection(currentDir => currentDir * -1);
        }
        
        // Add or subtract 1-3 agents
        const change = Math.floor(Math.random() * 3) + 1;
        return prev + (change * countDirection);
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [countDirection]);
  
  // Simulate countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        const [hours, minutes, seconds] = prev.split(':').map(Number);
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        if (newHours < 0) {
          // Reset to a new random time when it hits zero
          return `${String(Math.floor(Math.random() * 6)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
        }
        
        return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Simulate occasional system status changes
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.8) {
        setSystemStatus('SCANNING');
        setTimeout(() => setSystemStatus('ONLINE'), 3000);
      } else if (rand > 0.95) {
        setSystemStatus('ALERT');
        setTimeout(() => setSystemStatus('ONLINE'), 2000);
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full py-1.5 px-4 border-t border-terminal-green/30 bg-[#0D1A2B] text-xs font-mono text-terminal-green/90 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center">
        <div className="flex items-center mr-6 mb-1 md:mb-0">
          <Shield className="h-3.5 w-3.5 mr-1.5" />
          <span className="mr-1">SYSTEM:</span>
          <span className={`${
            systemStatus === 'ONLINE' ? 'text-terminal-green' : 
            systemStatus === 'SCANNING' ? 'text-cyber-blue animate-pulse' : 
            'text-neon-pink animate-pulse'
          }`}>
            {systemStatus}
          </span>
          {systemStatus !== 'ONLINE' && <Activity className="h-3 w-3 ml-1 animate-pulse" />}
        </div>
        
        <div className="flex items-center mr-6 mb-1 md:mb-0">
          <Users className="h-3.5 w-3.5 mr-1.5" />
          <span className="mr-1">AGENT COUNT:</span>
          <span className="text-terminal-green">{agentCount.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center mb-1 md:mb-0">
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          <span className="mr-1">NEXT BREACH SIM:</span>
          <span className="text-terminal-green">{timeRemaining}</span>
        </div>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-terminal-black text-terminal-green border-t border-terminal-green/30">
      {/* Live System Status HUD Strip */}
      <LiveSystemStatus />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-terminal-green font-pixel text-xl mr-1 transform -translate-y-1">[</div>
              <div className="text-cyber-blue font-pixel text-xl">CODE</div>
              <div className="text-neon-pink font-pixel text-xl mx-1">-</div>
              <div className="text-terminal-green font-pixel text-xl">ZERO</div>
              <div className="text-terminal-green font-pixel text-xl ml-1 transform -translate-y-1">]</div>
            </div>
            <p className="text-terminal-green/70 mb-4 font-sans text-sm leading-relaxed">
              Training the next generation of cyber defenders through immersive pixel-based missions. 
              Our platform combines tactical training with real-world scenarios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-terminal-green hover:text-cyber-blue transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-green hover:text-cyber-blue transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-green hover:text-cyber-blue transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-green hover:text-cyber-blue transition-colors duration-200">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-pixel text-terminal-green mb-4 uppercase tracking-wider">Navigate</h3>
              <ul className="space-y-2 font-sans text-sm">
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Curriculum</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Progress</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-pixel text-terminal-green mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 font-sans text-sm">
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Forums</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Support</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-pixel text-terminal-green mb-4 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 font-sans text-sm">
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="#" className="text-terminal-green/70 hover:text-terminal-green transition-colors duration-200">GDPR</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-terminal-green/30 text-sm text-terminal-green/60 font-mono">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2023 Code-Zero. All rights reserved. // System Version 1.3.37</p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-terminal-green animate-pulse rounded-full"></div>
              <p>Secure Connection Established | Terminal Session: #45D92F</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

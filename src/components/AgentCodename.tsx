import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

// List of cybersecurity-themed agent codenames
const codeNames = [
  "BYTE_GUARDIAN",
  "CIPHER_HAWK",
  "PHANTOM_NODE",
  "PROXY_SHADE",
  "ECHO_SHIELD",
  "QUANTUM_WRAITH",
  "SYSTEM_SENTINEL",
  "CRYPTO_SPECTER",
  "GHOST_PROTOCOL",
  "FIREWALL_HUNTER"
];

interface AgentCodenameProps {
  fixed?: boolean;
  fixedName?: string;
  className?: string;
}

const AgentCodename: React.FC<AgentCodenameProps> = ({ 
  fixed = false, 
  fixedName, 
  className = "" 
}) => {
  const [codename, setCodename] = useState(fixedName || codeNames[0]);
  const [isBlinking, setIsBlinking] = useState(false);

  // For non-fixed codenames, we'll switch between them occasionally
  useEffect(() => {
    if (fixed) return;
    
    // Change codename every 20 seconds
    const interval = setInterval(() => {
      setIsBlinking(true);
      
      // After blink animation, change name
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * codeNames.length);
        setCodename(codeNames[randomIndex]);
        setIsBlinking(false);
      }, 500);
    }, 20000);
    
    return () => clearInterval(interval);
  }, [fixed]);

  return (
    <div className={`flex items-center ${className}`}>
      <User className="h-3.5 w-3.5 text-terminal-green/70 mr-1.5" />
      <div className="font-pixel text-xs text-terminal-green flex items-center">
        <span>AGENT:</span>
        <span className={`ml-1 ${isBlinking ? 'animate-glitch' : ''}`}>{codename}</span>
      </div>
    </div>
  );
};

export default AgentCodename;
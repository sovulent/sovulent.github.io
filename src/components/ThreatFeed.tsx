import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Terminal } from 'lucide-react';

// Simulated threat feed data
const threatData = [
  { id: 1, type: 'warning', message: '> Suspicious activity detected on port 443...' },
  { id: 2, type: 'alert', message: '> Brute-force attempt blocked: 198.51.100.23' },
  { id: 3, type: 'info', message: '> New mission uploaded: CRYPT0-SHADOW' },
  { id: 4, type: 'warning', message: '> SSL certificate expiring in 4 days' },
  { id: 5, type: 'alert', message: '> Multiple login attempts from 203.0.113.42' },
  { id: 6, type: 'info', message: '> System patches available: 3 critical updates' },
  { id: 7, type: 'warning', message: '> Unusual network traffic detected' },
  { id: 8, type: 'info', message: '> Reconnaissance scan identified: NETWORK_PULSE' }
];

const ThreatFeed: React.FC = () => {
  const [visibleThreats, setVisibleThreats] = useState<Array<{id: number, type: string, message: string}>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initial load of first 3 threats
  useEffect(() => {
    setVisibleThreats(threatData.slice(0, 3));
  }, []);

  // Rotate threat feed every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Update index and cycle back to beginning if needed
      const nextIndex = (currentIndex + 1) % threatData.length;
      setCurrentIndex(nextIndex);
      
      // Update visible threats - show 3 threats at a time
      const newThreats = [];
      for (let i = 0; i < 3; i++) {
        const threatIndex = (nextIndex + i) % threatData.length;
        newThreats.push(threatData[threatIndex]);
      }
      
      setVisibleThreats(newThreats);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-3.5 w-3.5 text-terminal-green mr-2" />;
      case 'alert':
        return <Shield className="h-3.5 w-3.5 text-neon-pink mr-2" />;
      default:
        return <Terminal className="h-3.5 w-3.5 text-terminal-green mr-2" />;
    }
  };

  return (
    <div className="bg-terminal-black border-b border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-terminal-dark px-2 py-1 rounded border border-terminal-green/30 font-pixel text-terminal-green text-xs">
              [THREAT_FEED]
            </div>
          </div>
          
          <div className="relative flex-1 overflow-hidden h-6">
            <div className="flex flex-col animate-slide-up">
              {visibleThreats.map((threat) => (
                <div 
                  key={threat.id} 
                  className="flex items-center text-xs py-1 text-gray-300 font-mono whitespace-nowrap"
                >
                  {getIcon(threat.type)}
                  {threat.message}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-3">
            <div className="text-xs text-terminal-green font-mono animate-blink">●</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatFeed;
import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, Tag } from 'lucide-react';
import MissionDecoder from './MissionDecoder';

// Mission card data
const missions = [
  {
    id: 1,
    title: 'FIREWALL BREACH',
    difficulty: 'BEGINNER',
    description: 'Learn how to identify and exploit common firewall vulnerabilities in a controlled environment.',
    tags: ['NETWORK', 'DEFENSE', 'BASICS'],
    time: '45 MIN',
    colorClass: 'border-t-terminal-green'
  },
  {
    id: 2,
    title: 'CRYPTOGRAPHY CRASH',
    difficulty: 'INTERMEDIATE',
    description: 'Master encryption techniques and learn how to protect sensitive data from interception.',
    tags: ['ENCRYPTION', 'SECURITY', 'DATA'],
    time: '60 MIN',
    colorClass: 'border-t-terminal-green'
  },
  {
    id: 3,
    title: 'ZERO DAY HUNTER',
    difficulty: 'ADVANCED',
    description: 'Learn to identify and report previously unknown software vulnerabilities in the wild.',
    tags: ['EXPLOITS', 'VULNERABILITIES', 'RESEARCH'],
    time: '120 MIN',
    colorClass: 'border-t-neon-pink'
  },
  {
    id: 4,
    title: 'SOCIAL ENGINEERING',
    difficulty: 'BEGINNER',
    description: 'Learn to identify and defend against the human element of security breaches.',
    tags: ['PHISHING', 'AWARENESS', 'DEFENSE'],
    time: '30 MIN',
    colorClass: 'border-t-terminal-green'
  },
  {
    id: 5,
    title: 'MALWARE ANALYSIS',
    difficulty: 'INTERMEDIATE',
    description: 'Dissect and analyze malicious code to understand how threats operate.',
    tags: ['REVERSE', 'ENGINEERING', 'SANDBOX'],
    time: '90 MIN',
    colorClass: 'border-t-terminal-green'
  },
  {
    id: 6,
    title: 'INCIDENT RESPONSE',
    difficulty: 'ADVANCED',
    description: 'Train to quickly and effectively respond to active security breaches in progress.',
    tags: ['TRIAGE', 'FORENSICS', 'RECOVERY'],
    time: '150 MIN',
    colorClass: 'border-t-neon-pink'
  }
];

const DifficultyBadge: React.FC<{ level: string }> = ({ level }) => {
  let bgColor = "bg-terminal-green text-terminal-black";
  
  if (level === "INTERMEDIATE") {
    bgColor = "bg-terminal-green/70 text-terminal-black";
  } else if (level === "ADVANCED") {
    bgColor = "bg-neon-pink text-terminal-black";
  }
  
  return (
    <span className={`text-xs px-2 py-0.5 rounded-sm font-pixel ${bgColor} flex items-center`}>
      <Shield className="h-3 w-3 mr-1 inline-block" />
      {level}
    </span>
  );
};

interface MissionCardProps {
  mission: typeof missions[0];
}

const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  const [isFlickering, setIsFlickering] = useState(false);
  const [activeMission, setActiveMission] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsFlickering(true);
    setIsHovered(true);
    setTimeout(() => setIsFlickering(false), 300);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div 
      key={mission.id}
      className={`bg-terminal-dark rounded-lg overflow-hidden border border-terminal-green/20 ${mission.colorClass} border-t-4 relative 
      ${isFlickering ? 'animate-glitch' : ''} 
      transition-all duration-300 hover:scale-[1.03] transform-gpu 
      hover:shadow-[0_0_15px_rgba(0,255,136,0.2),inset_0_0_10px_rgba(0,255,136,0.05)] 
      hover:border-terminal-green/80 mission-card-hover`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        boxShadow: isHovered ? '0 0 15px rgba(0, 255, 136, 0.15), inset 0 0 8px rgba(0, 255, 136, 0.05)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      {/* Corner accent decorations */}
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-terminal-green/60 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-terminal-green/60 opacity-80"></div>
      
      <div className="p-6 relative z-10">
        {/* Small system indicator */}
        <div className="absolute top-2 right-2 flex items-center">
          <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-terminal-green animate-pulse' : 'bg-terminal-green/40'} mr-1`}></div>
          <div className={`text-[8px] font-mono ${isHovered ? 'text-terminal-green' : 'text-terminal-green/40'}`}>
            {isHovered ? 'ACTIVE' : 'STANDBY'}
          </div>
        </div>
      
        <div className="flex justify-between items-center mb-3">
          <DifficultyBadge level={mission.difficulty} />
          <div className="text-xs text-gray-400 font-mono flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {mission.time}
          </div>
        </div>
        
        <h3 className={`text-xl font-pixel ${isHovered ? 'text-terminal-green animate-pulse-slow' : 'text-terminal-green'} mb-3 transition-colors duration-300`}>
          {mission.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 font-sans min-h-[80px]">{mission.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {mission.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs ${isHovered ? 'bg-terminal-black/80 text-terminal-green/90' : 'bg-terminal-black/50 text-gray-300'} 
              px-2 py-1 rounded-sm font-mono flex items-center transition-colors duration-300`}
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          {activeMission === mission.id ? (
            <MissionDecoder 
              missionId={mission.id} 
              onComplete={() => setActiveMission(null)}
            />
          ) : (
            <button 
              onClick={() => setActiveMission(mission.id)}
              className={`text-terminal-green pixel-btn font-pixel text-sm flex items-center transition-all duration-200 
              hover:-translate-y-0.5 hover:translate-x-0.5 group ${isHovered ? 'underline' : ''}`}
              style={{ textShadow: isHovered ? '0 0 5px rgba(0, 255, 136, 0.5)' : 'none' }}
            >
              <span className={`${isHovered ? 'animate-pulse-slow' : ''}`}>BEGIN MISSION</span>
              <ArrowRight className={`h-3.5 w-3.5 ml-1 ${isHovered ? 'animate-blink' : 'opacity-70'} transition-opacity`} />
            </button>
          )}
        </div>
      </div>
      
      {/* CRT scanline effect */}
      <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none"></div>
      
      {/* Bottom border line with pulse effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-terminal-green/60 to-transparent 
      ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{ 
        animation: isHovered ? 'divider-scan 3s infinite linear' : 'none'
      }}></div>
    </div>
  );
};

const MissionCards: React.FC = () => {
  return (
    <section className="py-16 relative" style={{ backgroundColor: "#0F2622" }}>
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm8 8h4v4H8V8zm8 0h4v4h-4V8zm8 0h4v4h-4V8zm8 0h4v4h-4V8zm-24 8h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm0-16h4v4h-4V0zM8 16h4v4H8v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm-24 8h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm0-16h4v4h-4V8zM8 24h4v4H8v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm-24 8h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm0-16h4v4h-4v-16z' fill='%2300FF88' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header with stylized divider */}
        <div className="relative py-6 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-500/40 shadow-[0_0_5px_rgba(0,255,136,0.3)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0F2622] px-6 text-sm font-mono text-green-400 tracking-wider">
              //// MISSION BRIEFINGS ////
            </span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-pixel text-terminal-green mb-4">MISSION BRIEFINGS</h2>
          <div className="section-divider w-32 h-1 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans mb-10">
            Select your next cyber operation from our tactical database of security challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block rounded border border-terminal-green/40 hover:border-terminal-green font-pixel px-6 py-3 text-sm text-terminal-green hover-glow-green transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wider pixel-btn"
          >
            View All Missions <span className="text-lg relative top-[1px]">›</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionCards;

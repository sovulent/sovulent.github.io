
import React from 'react';
import { ArrowRight, Shield, Clock, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Packet Sniffer (Python)',
    difficulty: 'In Progress',
    description: 'A Python-based tool to capture, parse, and log network traffic on local interfaces.',
    tags: ['Python', 'Network', 'Analysis'],
    time: 'Ongoing',
    colorClass: 'border-t-terminal-green'
  },
  {
    id: 2,
    title: 'Firewall Rule Generator',
    difficulty: 'Complete',
    description: 'Automated iptables configuration generator for hardened Linux servers.',
    tags: ['Linux', 'Firewall', 'Bash'],
    time: '2 Weeks',
    colorClass: 'border-t-terminal-yellow'
  },
  {
    id: 3,
    title: 'Vuln Lab: Metasploit + ZAP',
    difficulty: 'Lab Build',
    description: 'Vulnerability testing environment using OWASP Juice Shop, Metasploit, and ZAP.',
    tags: ['OffSec', 'Testing', 'OWASP'],
    time: '1 Month',
    colorClass: 'border-t-terminal-purple'
  }
];

const ProjectCards: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-10 border-t border-terminal-green">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-8 text-center">🛠️ My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className={`border ${proj.colorClass} bg-card shadow-lg rounded-lg p-5`}>
              <h3 className="text-xl font-semibold text-foreground mb-2">{proj.title}</h3>
              <p className="text-muted mb-2">{proj.description}</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted mt-2">
                <span className="flex items-center gap-1"><Shield size={14}/> {proj.difficulty}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {proj.time}</span>
                <span className="flex items-center gap-1"><Tag size={14}/> {proj.tags.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;

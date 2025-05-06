
import React, { useState, useEffect } from 'react';
import AnimatedWelcomeHeader from './AnimatedWelcomeHeader';

const AboutMeSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const welcomeText = "KRISTOPHER RAY | CYBERSECURITY PORTFOLIO";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setTypedText(prev => prev + welcomeText.charAt(index));
      index++;
      if (index === welcomeText.length) clearInterval(typeInterval);
    }, 70);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="relative py-16 px-6 md:px-10 border-t border-terminal-green bg-gradient-to-b from-background/60 to-background/90">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedWelcomeHeader text={typedText} />
        <p className="text-muted mt-4 text-lg">
          Cybersecurity student at ECPI University focused on penetration testing, network defense, and ethical hacking. Building tools and labs to sharpen real-world skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;

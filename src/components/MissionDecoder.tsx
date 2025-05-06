import React, { useState, useEffect } from 'react';

interface MissionDecoderProps {
  missionId: string | number;
  onComplete?: () => void;
}

const decodingSteps = [
  "Decrypting mission...",
  "Analyzing risk level...",
  "Verifying access codes...",
  "Mission data loaded...",
  "Ready for deployment"
];

const MissionDecoder: React.FC<MissionDecoderProps> = ({ missionId, onComplete }) => {
  const [isDecoding, setIsDecoding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isDecoding && currentStep < decodingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 400);

      return () => clearTimeout(timer);
    } else if (isDecoding && currentStep >= decodingSteps.length) {
      // Animation complete
      const timer = setTimeout(() => {
        setIsDecoding(false);
        if (onComplete) {
          onComplete();
        } else {
          // Just finish the animation without navigation for now
          console.log(`Mission ${missionId} decoded successfully`);
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isDecoding, currentStep, missionId, onComplete]);

  const startDecoding = () => {
    setCurrentStep(0);
    setIsDecoding(true);
  };

  return (
    <>
      {!isDecoding ? (
        <button 
          onClick={startDecoding} 
          className="pixel-btn bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-pixel py-2 px-5 rounded uppercase tracking-wide flex-none text-sm text-center transition-all duration-200 hover:-translate-y-0.5"
        >
          Start Mission
        </button>
      ) : (
        <div className="bg-terminal-dark border border-terminal-green/30 rounded p-3 font-mono text-sm text-terminal-green">
          <div className="flex items-center">
            <span className="animate-blink mr-2">▋</span>
            <span>{decodingSteps[currentStep] || "Initializing..."}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default MissionDecoder;
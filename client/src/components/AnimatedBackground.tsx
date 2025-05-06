import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call resize immediately
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Matrix settings
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store how many steps each column has progressed
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    // Draw function
    const draw = () => {
      // Black semi-transparent BG to show trail effect
      ctx.fillStyle = 'rgba(17, 24, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green text
      ctx.fillStyle = 'rgba(0, 255, 136, 0.2)';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = String.fromCharCode(0x30A0 + Math.random() * 33); // Katakana characters

        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // After drawing a character, increment y coordinate
        drops[i]++;
        
        // If drop reached bottom of screen, randomize its position
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-terminal-black overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-terminal-black/60"></div>
      <div className="scanline absolute inset-0 opacity-20"></div>
      <div className="crt-overlay absolute inset-0 opacity-10"></div>
      <div className="animate-flicker absolute inset-0 bg-terminal-black opacity-0"></div>
    </div>
  );
};

export default AnimatedBackground;
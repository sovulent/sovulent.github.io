import React, { useEffect, useRef } from 'react';

const HexGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Hex grid settings
    const hexSize = 30; // Size of hexagon
    const spacing = 5; // Spacing between hexagons
    const totalSize = hexSize + spacing;
    
    // Animation variables
    let offsetY = 0;
    
    // Draw a single hexagon
    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const xPos = x + size * Math.cos(angle);
        const yPos = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(xPos, yPos);
        } else {
          ctx.lineTo(xPos, yPos);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    // Draw function for all hexagons
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set line style
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.15)';
      ctx.lineWidth = 1;
      
      // Calculate grid dimensions
      const columns = Math.ceil(canvas.width / (totalSize * 1.5)) + 1;
      const rows = Math.ceil(canvas.height / (totalSize * Math.sqrt(3) / 2)) + 1;
      
      // Draw hexagons in a grid pattern with offset for every other row
      for (let row = -1; row < rows; row++) {
        const rowOffset = row % 2 === 0 ? 0 : totalSize * 0.75;
        const yPos = row * totalSize * Math.sqrt(3) / 2 + offsetY;
        
        for (let col = -1; col < columns; col++) {
          const xPos = col * totalSize * 1.5 + rowOffset;
          drawHexagon(xPos, yPos, hexSize / 2);
        }
      }
    };

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(); // Redraw on resize
    };

    // Call resize immediately
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      // Move grid slowly upward
      offsetY -= 0.15;
      
      // Reset position when a full cycle has passed
      if (offsetY < -totalSize * Math.sqrt(3) / 2) {
        offsetY = 0;
      }
      
      draw();
      requestAnimationFrame(animate);
    };
    
    const animationFrameId = requestAnimationFrame(animate);

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
      <div className="absolute inset-0 bg-terminal-black/40"></div>
      <div className="scanline absolute inset-0 opacity-20"></div>
      <div className="crt-overlay absolute inset-0 opacity-10"></div>
      <div className="animate-flicker absolute inset-0 bg-terminal-black opacity-0"></div>
    </div>
  );
};

export default HexGridBackground;
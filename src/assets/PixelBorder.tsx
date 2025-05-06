import React, { ReactNode } from 'react';

interface PixelBorderProps {
  children: ReactNode;
  className?: string;
}

export const PixelBorder: React.FC<PixelBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`pixel-border ${className}`}>
      {children}
    </div>
  );
};

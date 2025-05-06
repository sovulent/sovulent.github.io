import React from 'react';

interface PixelDividerProps {
  width?: string;
  className?: string;
}

export const PixelDivider: React.FC<PixelDividerProps> = ({ width = 'w-32', className = '' }) => {
  return (
    <div className={`pixel-divider ${width} ${className}`}></div>
  );
};

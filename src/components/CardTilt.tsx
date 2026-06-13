import React, { useState, useRef } from 'react';

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Optional custom spotlight color (default sky glow)
}

export default function CardTilt({ children, className = '', glowColor = 'rgba(56, 189, 248, 0.12)' }: CardTiltProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    // Calculate rotation perspective offsets (e.g. max 12 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 6; // Max rotation on vertical
    const rotateY = ((x - centerX) / centerX) * 6; // Max rotation on horizontal

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      // Revert calmly
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-350 ease-out overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Spotlight Halo Tracker */}
      <div
        className="absolute pointer-events-none z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 130px at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {children}
    </div>
  );
}

import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = true, className = '' }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Duchas Technologies Logo">
        <defs>
          <linearGradient id="lgA" x1="4" y1="4" x2="52" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b8860b" />
            <stop offset="0.5" stopColor="#d4a855" />
            <stop offset="1" stopColor="#8b6914" />
          </linearGradient>
          <linearGradient id="lgB" x1="28" y1="6" x2="28" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a1612" />
            <stop offset="1" stopColor="#3d342a" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        {/* Shield/hexagon base */}
        <path d="M28 3L50 15v26L28 53 6 41V15L28 3z" fill="url(#lgB)" stroke="url(#lgA)" strokeWidth="1.5" />
        {/* Inner shield highlight */}
        <path d="M28 8L46 18v20L28 48 10 38V18L28 8z" fill="none" stroke="url(#lgA)" strokeWidth="0.75" opacity="0.3" />
        {/* Biometric scan arcs */}
        <path d="M28 14C20.268 14 14 20.268 14 28" stroke="url(#lgA)" strokeWidth="2" strokeLinecap="round" filter="url(#glow)" />
        <path d="M42 28C42 20.268 35.732 14 28 14" stroke="url(#lgA)" strokeWidth="2" strokeLinecap="round" opacity="0.7" filter="url(#glow)" />
        <path d="M28 42C35.732 42 42 35.732 42 28" stroke="url(#lgA)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M14 28C14 35.732 20.268 42 28 42" stroke="url(#lgA)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        {/* Inner ring */}
        <circle cx="28" cy="28" r="8" stroke="url(#lgA)" strokeWidth="1.2" fill="none" opacity="0.4" />
        {/* Core */}
        <circle cx="28" cy="28" r="3.5" fill="url(#lgA)" filter="url(#glow)" />
        {/* Corner accents */}
        <circle cx="28" cy="14" r="2" fill="#d4a855" />
        <circle cx="42" cy="28" r="1.5" fill="#b8860b" opacity="0.7" />
        {/* D letterform subtly integrated */}
        <path d="M23 22h4c3.314 0 6 2.686 6 6s-2.686 6-6 6h-4V22z" fill="none" stroke="url(#lgA)" strokeWidth="1.5" opacity="0.15" />
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{
            fontSize: `${size * 0.38}px`, fontWeight: 800, letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #1a1612, #3d342a)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Duchas</span>
          <span style={{
            fontSize: `${size * 0.2}px`, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            background: 'linear-gradient(135deg, #b8860b, #d4a855)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Technologies</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

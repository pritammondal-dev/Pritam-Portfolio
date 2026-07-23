import React from 'react';

export default function GlassCard({ children, className = '', hover = true, gradientBorder = false, ...props }) {
  const cardClasses = [
    'glass',
    hover ? 'glass-hover' : '',
    gradientBorder ? 'gradient-border' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}

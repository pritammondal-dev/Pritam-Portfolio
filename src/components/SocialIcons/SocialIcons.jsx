import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`hero-socials reveal ${className}`}>
      {siteConfig.socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="social-icon"
          aria-label={link.platform}
          target={link.url.startsWith('http') ? '_blank' : '_self'}
          rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}

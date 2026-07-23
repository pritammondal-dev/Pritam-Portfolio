import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import './Footer.css';

export default function Footer() {
  const footerNav = siteConfig.navigation;
  const footerSocials = siteConfig.socialLinks.filter((link) => 
    siteConfig.footer.allowedPlatforms.includes(link.platform)
  );

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <a href="#hero" className="logo">{siteConfig.personal.firstName}<span>.</span></a>
          
          <ul className="footer-links">
            {footerNav.map((link) => (
              <li key={link.target}>
                <a href={`#${link.target}`}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="hero-socials">
            {footerSocials.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="social-icon"
                aria-label={link.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <p className="copyright">
          {siteConfig.footer.copyrightTemplate.replace('{name}', siteConfig.personal.fullName)}
        </p>
      </div>
    </footer>
  );
}

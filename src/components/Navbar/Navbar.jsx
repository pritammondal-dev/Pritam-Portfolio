import React, { useEffect, useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import { siteConfig } from '../../config/siteConfig';
import Button from '../Button/Button';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = siteConfig.navigation.map(item => item.target);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#hero" className="logo">{siteConfig.personal.firstName}<span>.</span></a>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
          {siteConfig.navigation.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                data-target={item.target}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Button href={siteConfig.personal.resumeUrl} variant="primary" magnetic={true} id="resume-btn" download>
            <i className="fa-solid fa-download"></i> {siteConfig.buttons.resume}
          </Button>
          <button
            id="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

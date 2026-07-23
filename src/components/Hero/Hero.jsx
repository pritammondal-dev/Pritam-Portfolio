import React from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import { siteConfig } from '../../config/siteConfig';
import Button from '../Button/Button';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypewriter(siteConfig.hero.developerRoles);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-top-badge reveal">
          <span className="open-pill">
            <span className="dot"></span> {siteConfig.hero.badgeText}
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-left">
            <p className="greeting reveal">
              <span className="wave">{siteConfig.hero.waveIcon}</span> {siteConfig.hero.greeting}
            </p>
            <h1 className="hero-name reveal">
              {siteConfig.personal.firstName} <span className="grad">{siteConfig.personal.lastName}</span>
            </h1>
            <div className="typewrite-line reveal">
              <span id="typewrite">{typedRole}</span>
              <span className="cursor-blink"></span>
            </div>
            <p className="hero-desc reveal">
              {siteConfig.hero.description}
            </p>
            <div className="hero-btns reveal">
              <Button href={siteConfig.personal.resumeUrl} variant="primary" magnetic={true} download>
                <i className="fa-solid fa-download"></i> {siteConfig.buttons.downloadResume}
              </Button>
              <Button href="#contact" variant="ghost" magnetic={true}>
                <i className="fa-solid fa-paper-plane"></i> {siteConfig.buttons.contactMe}
              </Button>
            </div>
            <SocialIcons className="reveal" />
          </div>
          <div className="hero-right">
            <div className="hero-img-wrap">
              <div className="glow-blob glow-1"></div>
              <div className="glow-blob glow-2"></div>
              <div className="orbit-ring r2"></div>
              <div className="orbit-ring"></div>
              <div className="gradient-ring" id="tilt-ring">
                <div className="inner">
                  <img
                    className="hero-photo"
                    src={siteConfig.images.avatarHero}
                    alt={`${siteConfig.personal.fullName} portrait`}
                  />
                </div>
              </div>
              
              {siteConfig.hero.orbitIcons.map((item, idx) => (
                <div 
                  key={idx} 
                  className="tech-orbit-icon" 
                  style={{ ...item.style, color: item.color }}
                  title={item.name}
                >
                  <i className={item.icon}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>{siteConfig.hero.scrollText}</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
}

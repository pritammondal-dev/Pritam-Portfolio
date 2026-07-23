import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import './About.css';

// Reusable Counter component that increments when visible in the viewport
function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 60));
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            setCount(cur);
          }, 25);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <GlassCard ref={ref} className="stat-card reveal" hover={true}>
      <div className="stat-num">
        <span>{count}</span>{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </GlassCard>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.about.eyebrow}
          icon={siteConfig.about.icon}
          title={siteConfig.about.title}
          subtitle={siteConfig.about.subtitle}
        />

        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-ring-outer"></div>
            <div className="about-ring-mid">
              <div className="about-photo-frame">
                <img
                  className="about-photo"
                  src={siteConfig.images.avatarAbout}
                  alt={`${siteConfig.personal.fullName} portrait`}
                />
              </div>
            </div>
          </div>
          <div className="about-text reveal">
            <div className="info-row">
              <span className="info-tag">
                <i className={siteConfig.about.education.icon}></i>&nbsp; {siteConfig.about.education.degree} — {siteConfig.about.education.institution}
              </span>
              <span className="info-tag">
                <i className={siteConfig.about.locationIcon}></i>&nbsp; {siteConfig.personal.country}
              </span>
            </div>
            <p>{siteConfig.about.descriptionParagraph1}</p>
            <p>{siteConfig.about.descriptionParagraph2}</p>

            <p style={{ color: 'var(--heading)', fontWeight: 600, marginTop: '8px' }}>{siteConfig.about.currentlyLearningTitle}</p>
            <div className="learn-list">
              {siteConfig.about.currentlyLearning.map((item) => (
                <span key={item} className="learn-chip">
                  {item}
                </span>
              ))}
            </div>

            <GlassCard className="goal-box" hover={false}>
              <p style={{ margin: 0, color: 'var(--heading)', fontStyle: 'normal' }}>
                <i className={siteConfig.about.goalIcon} style={{ color: 'var(--primary)', marginRight: '8px' }}></i>
                {siteConfig.about.goalText}
              </p>
            </GlassCard>

            <p style={{ color: 'var(--heading)', fontWeight: 600, marginTop: '22px' }}>{siteConfig.about.interestsTitle}</p>
            <div className="learn-list">
              {siteConfig.about.interests.map((item) => (
                <span key={item} className="learn-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {siteConfig.about.stats.map((stat, index) => (
            <StatCounter
              key={index}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

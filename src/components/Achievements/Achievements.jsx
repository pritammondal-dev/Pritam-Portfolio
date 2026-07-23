import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import './Achievements.css';

function AchieveCounter({ target, suffix = '', label, icon }) {
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
    <GlassCard ref={ref} className="achieve-card reveal" hover={true}>
      <div className="achieve-icon">
        <i className={icon}></i>
      </div>
      <div className="stat-num">
        <span>{count}</span>{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </GlassCard>
  );
}

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.achievements.eyebrow}
          icon={siteConfig.achievements.icon}
          title={siteConfig.achievements.title}
          subtitle={siteConfig.achievements.subtitle}
        />

        <div className="achieve-grid">
          {siteConfig.achievements.achievementsData.map((ach, idx) => (
            <AchieveCounter
              key={idx}
              target={ach.target}
              suffix={ach.suffix}
              label={ach.label}
              icon={ach.icon}
            />
          ))}
        </div>

        <div className="profiles-row">
          {siteConfig.achievements.profileStats.map((profile, idx) => (
            <GlassCard key={idx} className="profile-card reveal" hover={true}>
              <i className={profile.icon}></i>
              <div>
                <div className="p-name">{profile.name}</div>
                <div className="p-stat">{profile.stat}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

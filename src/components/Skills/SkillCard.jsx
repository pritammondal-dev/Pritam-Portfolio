import React, { useEffect, useState, useRef } from 'react';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';

export function SkillCard({ skill }) {
  const [percent, setPercent] = useState(0);
  const cardRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let cur = 0;
          const target = skill.level;
          const step = Math.max(1, target / 40);
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(t);
            }
            setPercent(cur);
          }, 16);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <GlassCard ref={cardRef} className="skill-card reveal in" hover={true}>
      <div className="skill-cat-label">{skill.cat}</div>
      <div
        className="circle-progress"
        style={{ '--percent': percent }}
      >
        <div className="circle-inner">
          <i className={skill.icon} style={{ color: skill.color }}></i>
        </div>
        <span className="circle-percent">{skill.level}%</span>
      </div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">{siteConfig.skills.proficiencyLabel}</div>
    </GlassCard>
  );
}

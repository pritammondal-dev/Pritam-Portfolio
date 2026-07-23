import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.experience.eyebrow}
          icon={siteConfig.experience.icon}
          title={siteConfig.experience.title}
          subtitle={siteConfig.experience.subtitle}
        />

        <div className="timeline" id="timeline">
          {siteConfig.experience.timelineData.map((item, index) => (
            <div key={index} className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <GlassCard className="timeline-card" hover={false}>
                <div className="timeline-tag">{item.tag}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import './Services.css';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.services.eyebrow}
          icon={siteConfig.services.icon}
          title={siteConfig.services.title}
          subtitle={siteConfig.services.subtitle}
        />

        <div className="services-grid" id="services-grid">
          {siteConfig.services.servicesData.map((service, index) => (
            <GlassCard key={index} className="service-card reveal" hover={true}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

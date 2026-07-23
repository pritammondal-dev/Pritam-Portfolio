import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { siteConfig } from '../../config/siteConfig';
import { SkillCard } from './SkillCard';
import './Skills.css';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const ITEMS_PER_SLIDE = 8;

  // Filter skills based on active category and search query
  const filteredSkills = siteConfig.skills.skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.cat === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  // Calculate slide chunks of size 8
  const slides = [];
  for (let i = 0; i < filteredSkills.length; i += ITEMS_PER_SLIDE) {
    slides.push(filteredSkills.slice(i, i + ITEMS_PER_SLIDE));
  }

  const totalSlides = slides.length || 1;

  // Reset slide index to 0 when search query or active category filter triggers changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [searchQuery, activeCategory]);

  // Autoplay handler
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="skills">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.skills.eyebrow}
          icon={siteConfig.skills.icon}
          title={siteConfig.skills.title}
          subtitle={siteConfig.skills.subtitle}
        />

        <div className="skills-controls reveal">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder={siteConfig.skills.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-chips">
            {siteConfig.skills.categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? siteConfig.skills.allLabel : cat}
              </button>
            ))}
          </div>
        </div>

        <div
          className="skills-slider-wrap reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {totalSlides > 1 && (
            <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous skills">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <div className="skills-slider">
            <div
              className="skills-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.length > 0 ? (
                slides.map((slideItems, slideIdx) => (
                  <div key={slideIdx} className="skills-slide">
                    {slideItems.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                ))
              ) : (
                <div className="skills-slide">
                  <p style={{ color: 'var(--muted)', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
                    {siteConfig.skills.emptyMessage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {totalSlides > 1 && (
            <button className="slider-arrow next" onClick={handleNext} aria-label="Next skills">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>

        {totalSlides > 1 && (
          <div className="skills-dots">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`skills-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

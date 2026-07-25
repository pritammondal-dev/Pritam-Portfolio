import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      handleCloseModal();
    }
  };

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handleNextImage = () => {
    const galleryLength = (selectedProject.gallery || [selectedProject.img]).slice(0, 10).length;
    setActiveImageIndex((prev) => (prev + 1) % galleryLength);
  };

  const handlePrevImage = () => {
    const galleryLength = (selectedProject.gallery || [selectedProject.img]).slice(0, 10).length;
    setActiveImageIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
  };

  return (
    <section id="projects">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.projects.eyebrow}
          icon={siteConfig.projects.icon}
          title={siteConfig.projects.title}
          subtitle={siteConfig.projects.subtitle}
        />

        <div className="projects-grid" id="projects-grid">
          {siteConfig.projects.projectsData.map((project) => (
            <GlassCard key={project.title} className="project-card reveal" hover={true}>
              <div className="project-img">
                <img src={project.img} alt={`${project.title} screenshot`} loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="badge-row">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.links.github}
                    className="icon-link"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={project.links.live}
                    className="icon-link"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <button
                    className="details-btn"
                    onClick={() => handleOpenModal(project)}
                  >
                    {siteConfig.buttons.viewDetails}
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Projects Details Dialog Modal */}
      <div
        id="modal-overlay"
        className={selectedProject ? 'open' : ''}
        onClick={handleBackdropClick}
      >
        {selectedProject && (
          <GlassCard className="modal-box" hover={false}>
            <button
              className="modal-close"
              id="modal-close"
              onClick={handleCloseModal}
              aria-label={siteConfig.buttons.closeModal}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div id="modal-content">
              <p className="eyebrow" style={{ marginBottom: '6px' }}>{siteConfig.projects.modalEyebrow}</p>
              <h2 style={{ fontSize: '1.7rem', marginBottom: '4px' }}>{selectedProject.title}</h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{selectedProject.desc}</p>
              
              <div className="modal-actions">
                {selectedProject.links?.github && selectedProject.links.github !== '#' && (
                  <a
                    href={selectedProject.links.github}
                    className="modal-action-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub Repo
                  </a>
                )}
                {selectedProject.links?.live && selectedProject.links.live !== '#' && (
                  <a
                    href={selectedProject.links.live}
                    className="modal-action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                )}
              </div>
              
              <h3>{siteConfig.projects.techStackHeading}</h3>
              <div className="badge-row">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              
              <h3>{siteConfig.projects.architectureHeading}</h3>
              <p>{siteConfig.projects.architectureText}</p>
              
              <h3>{siteConfig.projects.featuresHeading}</h3>
              <ul>
                {selectedProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <h3>{siteConfig.projects.challengesHeading}</h3>
              <p>{selectedProject.challenges}</p>
              
              <h3>{siteConfig.projects.lessonsHeading}</h3>
              <p>{selectedProject.lessons}</p>
              
              <h3>{siteConfig.projects.galleryHeading}</h3>
              <div className="modal-gallery">
                {(selectedProject.gallery || [selectedProject.img]).slice(0, 10).map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`Screenshot view ${i + 1}`}
                    onClick={() => handleOpenLightbox(i)}
                    className="gallery-thumb"
                  />
                ))}
              </div>
            </div>
          </GlassCard>
        )}
      </div>

      {/* Fullscreen Lightbox Overlay */}
      {selectedProject && activeImageIndex !== null && (
        <div id="lightbox-overlay" onClick={handleCloseLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={handleCloseLightbox}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="lightbox-arrow prev" onClick={handlePrevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img
              src={(selectedProject.gallery || [selectedProject.img]).slice(0, 10)[activeImageIndex]}
              alt={`Fullscreen view ${activeImageIndex + 1}`}
              className="lightbox-image"
            />
            <button className="lightbox-arrow next" onClick={handleNextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="lightbox-counter">
              {activeImageIndex + 1} / {(selectedProject.gallery || [selectedProject.img]).slice(0, 10).length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

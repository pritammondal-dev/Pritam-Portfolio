import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import GlassCard from '../GlassCard/GlassCard';
import { siteConfig } from '../../config/siteConfig';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = siteConfig.contact.validation.nameRequired;
    } else if (trimmedName.length < 2 || trimmedName.length > 50) {
      newErrors.name = siteConfig.contact.validation.nameLength;
    }
    
    // Email validation
    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const obviousPlaceholders = [
      'user@example.com',
      'test@test.com',
      'example@example.com',
      'admin@example.com',
      'demo@example.com'
    ];
    
    if (!trimmedEmail) {
      newErrors.email = siteConfig.contact.validation.emailRequired;
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = siteConfig.contact.validation.emailInvalid;
    } else if (obviousPlaceholders.includes(trimmedEmail.toLowerCase())) {
      newErrors.email = siteConfig.contact.validation.emailPlaceholder;
    }
    
    // Subject validation
    const trimmedSubject = formData.subject.trim();
    if (!trimmedSubject) {
      newErrors.subject = siteConfig.contact.validation.subjectRequired;
    } else if (trimmedSubject.length < 5) {
      newErrors.subject = siteConfig.contact.validation.subjectLength;
    }
    
    // Message validation
    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      newErrors.message = siteConfig.contact.validation.messageRequired;
    } else if (trimmedMessage.length < 15 || trimmedMessage.length > 1000) {
      newErrors.message = siteConfig.contact.validation.messageLength;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    
    if (!validateForm()) {
      return;
    }
    
    setIsSending(true);
    
    try {
      const emailParams = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        submitted: new Date().toLocaleString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      };

      await emailjs.send(
        (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim(),
        (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim(),
        emailParams,
        (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim()
      );
      
      setStatus({
        type: 'success',
        message: siteConfig.contact.messages.success
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setStatus({
        type: 'error',
        message: siteConfig.contact.messages.error
      });
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    { label: 'Email', value: siteConfig.personal.email, icon: 'fa-solid fa-envelope', link: `mailto:${siteConfig.personal.email}` },
    { label: 'GitHub', value: siteConfig.socials.github.replace('https://', ''), icon: 'fa-brands fa-github', link: siteConfig.socials.github },
    { label: 'LinkedIn', value: siteConfig.socials.linkedin.replace('https://', ''), icon: 'fa-brands fa-linkedin-in', link: siteConfig.socials.linkedin },
    { label: 'Location', value: siteConfig.personal.location, icon: 'fa-solid fa-location-dot', link: null }
  ];

  return (
    <section id="contact">
      <div className="container">
        <SectionTitle
          eyebrow={siteConfig.contact.eyebrow}
          icon={siteConfig.contact.icon}
          title={siteConfig.contact.title}
          subtitle={siteConfig.contact.subtitle}
        />

        <div className="contact-grid">
          <div className="reveal">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="contact-info-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <div className="label">{info.label}</div>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="value">
                      {info.value}
                    </a>
                  ) : (
                    <div className="value">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <div className="label">{siteConfig.contact.availabilityLabel}</div>
                <div className="avail-pill">
                  <span className="dot"></span> {siteConfig.contact.availabilityStatus}
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="contact-form reveal" hover={false} tag="form" onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{siteConfig.contact.fields.name.label}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={siteConfig.contact.fields.name.placeholder}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">
                      <i className="fa-solid fa-circle-exclamation"></i> {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{siteConfig.contact.fields.email.label}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={siteConfig.contact.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">
                      <i className="fa-solid fa-circle-exclamation"></i> {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">{siteConfig.contact.fields.subject.label}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={siteConfig.contact.fields.subject.placeholder}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="error-message">
                    <i className="fa-solid fa-circle-exclamation"></i> {errors.subject}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">{siteConfig.contact.fields.message.label}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={siteConfig.contact.fields.message.placeholder}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <span className="error-message">
                    <i className="fa-solid fa-circle-exclamation"></i> {errors.message}
                  </span>
                )}
              </div>
              <Button type="submit" variant="primary" magnetic={true} className="submit-btn" disabled={isSending}>
                {isSending ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin"></i> {siteConfig.buttons.sending}
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> {siteConfig.buttons.sendMessage}
                  </>
                )}
              </Button>
              {status.message && (
                <p className={`form-status ${status.type}`} id="form-status">
                  <i className={status.type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation'}></i> {status.message}
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

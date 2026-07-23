import React from 'react';

export default function SectionTitle({ eyebrow, icon, title, subtitle }) {
  return (
    <>
      {eyebrow && (
        <p className="eyebrow reveal">
          {icon && <i className={icon}></i>}
          {icon ? `\u00A0${eyebrow}` : eyebrow}
        </p>
      )}
      {title && <h2 className="section-title reveal">{title}</h2>}
      {subtitle && <p className="section-sub reveal">{subtitle}</p>}
    </>
  );
}

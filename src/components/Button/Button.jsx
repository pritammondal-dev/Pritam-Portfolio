import React, { useRef, useEffect } from 'react';

export default function Button({ children, className = '', variant = 'primary', href, magnetic = true, onClick, type = 'button', ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || !magnetic) return;

    const handleMouseMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = 'translate(0,0)';
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic]);

  const buttonClasses = [
    'btn',
    variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : '',
    magnetic ? 'magnetic' : '',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a ref={btnRef} href={href} className={buttonClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={btnRef} type={type} className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

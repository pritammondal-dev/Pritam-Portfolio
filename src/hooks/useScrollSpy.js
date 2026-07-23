import { useEffect, useState } from 'react';

export default function useScrollSpy(selectors, options = {}) {
  const { rootMargin = '-45% 0px -50% 0px' } = options;
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = selectors.map(id => document.getElementById(id)).filter(Boolean);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selectors, rootMargin]);

  return activeId;
}

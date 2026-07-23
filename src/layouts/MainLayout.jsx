import React, { useEffect, useRef, useState } from 'react';
import AuroraBackground from '../components/AuroraBackground/AuroraBackground';
import Loader from '../components/Loader/Loader';
import { scrollToTop } from '../utils/scroll';
import { siteConfig } from '../config/siteConfig';

export default function MainLayout({ children }) {
  // SEO Metadata Update
  useEffect(() => {
    document.title = siteConfig.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', siteConfig.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteConfig.seo.description;
      document.head.appendChild(meta);
    }
  }, []);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  // Custom Cursor mousemove and lerp loop
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let animationFrameId;
    let inactivityTimeout;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (inactivityTimeout) {
        clearTimeout(inactivityTimeout);
      }

      // 1. Hide on main window scrollbars
      const onRightScrollbar = mx >= window.innerWidth - 16;
      const onBottomScrollbar = my >= window.innerHeight - 16;
      const nearRightScrollbar = mx >= window.innerWidth - 40;
      const nearBottomScrollbar = my >= window.innerHeight - 40;
      
      let overScrollbar = onRightScrollbar || onBottomScrollbar;
      let nearScrollbar = nearRightScrollbar || nearBottomScrollbar;
      
      // 2. Hide on internal scrollable elements' scrollbars (modal, gallery, etc.)
      if (!overScrollbar) {
        let el = e.target;
        while (el && el !== document.documentElement && el !== document.body) {
          const style = window.getComputedStyle(el);
          const hasScrollY = el.scrollHeight > el.clientHeight && 
                             (style.overflowY === 'auto' || style.overflowY === 'scroll');
          const hasScrollX = el.scrollWidth > el.clientWidth && 
                             (style.overflowX === 'auto' || style.overflowX === 'scroll');
                             
          if (hasScrollY || hasScrollX) {
            const rect = el.getBoundingClientRect();
            if (hasScrollY) {
              if (mx >= rect.right - 16 && mx <= rect.right) {
                overScrollbar = true;
              }
              if (mx >= rect.right - 40 && mx <= rect.right) {
                nearScrollbar = true;
              }
            }
            if (hasScrollX) {
              if (my >= rect.bottom - 16 && my <= rect.bottom) {
                overScrollbar = true;
              }
              if (my >= rect.bottom - 40 && my <= rect.bottom) {
                nearScrollbar = true;
              }
            }
            if (overScrollbar) break;
          }
          el = el.parentElement;
        }
      }

      if (overScrollbar) {
        setIsCursorVisible(false);
      } else {
        setIsCursorVisible(true);
        // Start fallback timer to hide the cursor if it enters the scrollbar and ceases firing mousemove events
        if (nearScrollbar) {
          inactivityTimeout = setTimeout(() => {
            setIsCursorVisible(false);
          }, 120);
        }
      }

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const handleMouseLeave = () => {
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
      setIsCursorVisible(false);
    };

    const handleMouseEnter = () => {
      setIsCursorVisible(true);
    };

    const animRing = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animationFrameId = requestAnimationFrame(animRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animRing();

    // Delegate hover states to handle dynamic elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.matches('a, button, .glass-hover, input, textarea, .slider-arrow, .skills-dot, .filter-chip, .details-btn, .gallery-thumb, .lightbox-close, .lightbox-arrow') ||
        target.closest('a, button, .glass-hover, input, textarea, .slider-arrow, .skills-dot, .filter-chip, .details-btn, .gallery-thumb, .lightbox-close, .lightbox-arrow')
      ) {
        setIsCursorActive(true);
      } else {
        setIsCursorActive(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      if (inactivityTimeout) clearTimeout(inactivityTimeout);
    };
  }, []);

  // Scroll Progress and Back To Top listeners
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const percent = h > 0 ? (st / h) * 100 : 0;
      setScrollProgress(percent);
      setShowBackTop(st > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Reveal Observer for elements with '.reveal' class
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => revealObserver.observe(el));

    // Observe DOM mutations to hook up new items dynamically
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll('.reveal:not(.in)');
      currentElements.forEach((el) => revealObserver.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [children]);

  return (
    <>
      <Loader />
      <div ref={dotRef} className={`cursor-dot ${isCursorVisible ? 'visible' : ''}`} id="cursor-dot"></div>
      <div
        ref={ringRef}
        className={`cursor-ring ${isCursorActive ? 'active' : ''} ${isCursorVisible ? 'visible' : ''}`}
        id="cursor-ring"
      ></div>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <AuroraBackground />
      {children}
      <button
        id="back-to-top"
        className={`glass ${showBackTop ? 'show' : ''}`}
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

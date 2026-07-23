import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const startTimeout = () => {
      setTimeout(() => setHide(true), 900);
    };

    if (document.readyState === 'complete') {
      startTimeout();
    } else {
      window.addEventListener('load', startTimeout);
      return () => window.removeEventListener('load', startTimeout);
    }
  }, []);

  return (
    <div id="loader" className={hide ? 'hide' : ''}>
      <div className="loader-mark">PRITAM<span>.DEV</span></div>
      <div className="loader-bar">
        <span></span>
      </div>
    </div>
  );
}

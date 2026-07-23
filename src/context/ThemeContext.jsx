/* eslint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const defaultTheme = siteConfig.themeSettings?.defaultTheme || 'dark';
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

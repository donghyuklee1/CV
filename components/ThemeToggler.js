'use client';

import React from 'react';
import { useTheme } from './ThemeContext'; // Import the hook

const ThemeToggler = () => {
  // Get theme and toggleTheme from the context
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ fontSize: '1.5rem', cursor: 'pointer', border: 'none', background: 'transparent' }}>
      {/* Render icon based on theme from context */}
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggler;

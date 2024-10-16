// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext); // Access context

  return (
    <header>
      <h1>Theme: {isDark ? 'Dark' : 'Light'}</h1>
      <button onClick={toggleTheme}>
        Switch 
      </button>
    </header>
  );
};

export default Header;

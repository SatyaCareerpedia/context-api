// Content.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext); // Access context

  return (
    <p>
      {isDark
        ? 'This is dark mode content.'
        : 'This is light mode content.'}
    </p>
  );
};

export default Content;

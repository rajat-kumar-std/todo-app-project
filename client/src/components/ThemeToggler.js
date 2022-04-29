import React from 'react';
import ThemeContext from '../context/Theme/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={`theme-toggler-btn ${theme}`}>
      {'☀'}
    </button>
  );
};

export default ThemeToggler;

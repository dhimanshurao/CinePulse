import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">CinePulse</h1>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#github">GitHub</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;

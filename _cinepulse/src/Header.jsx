import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">CinePulse</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/SeatCount">Seats</Link>
        <Link to="/Payment">Payment</Link>
      </nav>
    </header>
  );
};

export default Header;

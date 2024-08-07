import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import AuthForm from './AuthForm';
import MovieFeed from './MovieFeed';
import SeatCount from './SeatCount';
import SeatSelection from './SeatSelection';
import Payment from './Payment';
import About from './About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background"></div>
        <div className="centered-content">
          <Header />
          <Routes>
          <Route path="/Seats" element={<SeatSelection />} />
            <Route path="/SeatCount" element={<SeatCount />} />
            <Route path="/" element={<AuthForm />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* <MovieFeed /> */}
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import Header from './Header';
import AuthForm from './AuthForm';
import MovieFeed from './MovieFeed';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="centered-content">
        <Header />
        <AuthForm />
      </div>
      <MovieFeed />
    </div>
  );
};

export default App;

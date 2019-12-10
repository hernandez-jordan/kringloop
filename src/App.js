import React from 'react';
// import ButtonAppBar from './Nav';
import './App.css';
import MainNavBar from './MainNav/MainNav';
import HeroBanner from './HeroBanner/HeroBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavBar />
      </header>
      <HeroBanner />
    </div>
  );
}

export default App;

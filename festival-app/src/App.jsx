import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Info from './src/pages/Info';
import Schedule from './pages/Schedule';
import Map from './src/pages/Map';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';

import './i18n';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

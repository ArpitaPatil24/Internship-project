import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import MainDashboard from './pages/MainDashboard';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </Router>
  )
}

export default App

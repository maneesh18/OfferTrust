import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Verify from './pages/Verify';
import RecruiterDashboard from './pages/RecruiterDashboard';
import GenerateOffer from './pages/GenerateOffer';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App(): React.JSX.Element {
  console.log('App component rendered');
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        <Route path="/generate-offer" element={<GenerateOffer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App; 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useStore } from './store';
// import { Auth } from './components/Auth';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/dashboard';
import './index.css';
import Login from './pages/login';
import Register from './pages/register';
import LandingPage from './pages/landingPage';
import DemoScreen from './pages/demoScreen';
import PrivacyPolicy from './pages/privacyPolicy';
import Legal from './pages/legal';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;

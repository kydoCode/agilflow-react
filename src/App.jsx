import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useStore } from './store';
import { Toaster } from 'react-hot-toast';
import './index.css';

// Lazy loading des pages pour optimisation
const Dashboard = lazy(() => import('./pages/dashboard'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const LandingPage = lazy(() => import('./pages/landingPage'));
const DemoScreen = lazy(() => import('./pages/demoScreen'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const Legal = lazy(() => import('./pages/legal'));
const Profile = lazy(() => import('./pages/profile'));

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Suspense>
     </BrowserRouter> 
    </>
  );
}

export default App;

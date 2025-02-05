import React, { useEffect } from 'react';
import logo from '../assets/images/agilflow_logo_nobg.png';
import tablet from '../assets/images/AF_Tab.png';
import { Link } from 'react-router-dom';


export default function DemoScreen() {

     useEffect(() => {
        document.title = 'AgilFlow - Demo';
      }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0066FF] to-[#00FF88]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              {/* <span className="text-blue-600 font-bold">A</span> */}
              <Link to="/">
                <img src={logo} alt="AgilFlow Logo" className="scale-x-150 scale-y-150"/>
              </Link>
            </div>
            <a href="/" className="text-white text-xl font-bold">
              AgilFlow
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">User Stories</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Sprints</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Reports</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Calendar</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white/10 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              AgilFlow
            </h1>
            <p className="text-lg text-white/80 mb-8">
            Effortlessly design, manage and track User Stories as team - the Agile way !
            </p>
            <button className="bg-[#0066FF] text-white px-8 py-3 rounded-full hover:bg-[#0055DD] transition-colors">
              Register
            </button>
          </div>

          {/* Dashboard Mockup */}
          {/* <div className="relative">
            <div className="bg-[#0B1E3D] rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img 
                src="/placeholder.svg?height=400&width=600"
                alt="Dashboard Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div> */}
           <Link to="/">
                <img src={tablet} alt="AgilFlow Logo" className="scale-x-150 scale-y-150 pl-100 pt-60"/>
           </Link>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
              fill="url(#gradient)" 
              fillOpacity="0.2"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#123363', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0D8B7D', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path 
              fill="url(#gradient)" 
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#0066FF', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#00FF88', stopOpacity: 1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
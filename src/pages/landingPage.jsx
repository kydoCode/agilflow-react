// import { Link } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useStore } from '../store';
import dashboard_screen_webp from '../assets/images/screencast_03.webp';
import dashboard_screen from '../assets/images/screencast_03.png';
import computer_screen_webp from '../assets/images/desktop_screen.webp';
import computer_screen from '../assets/images/desktop_screen.png';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useStore();
  
    useEffect(() => {
      document.title = document.title.replace('%REACT_APP_PAGE_TITLE%', 'Home');
    }, []);

  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]">
    <Header />
      
      {/* Rest of the component remains the same */}
      <div className="container mx-auto px-2 sm:px-4 pt-8 sm:pt-16 pb-16 sm:pb-32">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              AgilFlow
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              {/*Créez, gérez, suivez et travaillez collaborativement vos US projets métiers.*/}
              Effortlessly design, manage and track User Stories as team - the Agile way !
            </h2>
            <button 
              onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}
              className="bg-white text-[#123363] px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-white/90 transition-colors font-medium text-base sm:text-lg active:bg-white/80"
            >
              {isAuthenticated ? 'Dashboard' : 'Register'}
            </button>

            {/* <button 
              onClick={() => navigate('/register')}
              className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
            >
              Register
            </button> */}
          </div>

          {/* 3D Dashboard Display */}
          <div className="relative perspective-[2000px] hidden md:block">
            {/* Main Display Container */}
            <div className="relative transform rotate-y-[-20deg] rotate-x-[10deg] hover:rotate-y-[-10deg] transition-transform duration-700 ease-out group">
              {/* Monitor Frame */}
              <div className="bg-[#2A2A2A] rounded-[2rem] p-[3px] shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-[#1A1A1A] rounded-[1.8rem] p-4 border border-[#333333]/50">
                  {/* Screen Content */}
                  <div className="relative bg-[#020B2D] rounded-[1.4rem] overflow-hidden">
                    {/* Top Bar with Controls */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#1A1A1A]/90 backdrop-blur-sm z-10 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="pt-8">
                      <picture>
                      <source srcSet={computer_screen_webp} type="image/webp" />
                      <img 
                        src={computer_screen}
                        alt="AgilFlow Dashboard Interface"
                        width="800"
                        height="600"
                        loading="lazy"
                        className="w-full h-auto transform scale-105 group-hover:scale-100 transition-transform duration-700"
                      />
                    </picture>
                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none"></div>
                    
                    {/* Screen Glare */}
                    <div className="absolute -inset-full bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 rotate-12 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Stand Base */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[95%] w-32 h-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] rounded-full"></div>
                <div className="w-full h-full bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] rounded-[1rem] transform perspective-[1000px] rotateX-[60deg]"></div>
              </div>

              {/* Monitor Shadow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-[#0D8B7D]/30 to-[#123363]/30 rounded-[3rem] blur-2xl -z-10"></div>
            </div>

            {/* Floating Elements */}
            <div className="hidden lg:block absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12 opacity-90">
              <div className="bg-gradient-to-br from-[#0D8B7D] to-[#123363] rounded-2xl p-4 shadow-xl">
                <div className="w-20 h-20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 -rotate-12 opacity-90">
              <div className="bg-gradient-to-br from-[#123363] to-[#0D8B7D] rounded-2xl p-4 shadow-xl">
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center py-10 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            <span className="block mb-2 opacity-90">Simplify.</span>
            <span className="block mb-2 opacity-90">Collaborate.</span>
            <span className="block opacity-90">Succeed.</span>
          </h2>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative px-2 sm:px-0">
          <div className="bg-[#0B1E3D] rounded-xl sm:rounded-2xl shadow-2xl p-2 sm:p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <picture>
              <source srcSet={dashboard_screen_webp} type="image/webp" />
              <img 
                src={dashboard_screen}
                alt="Dashboard Interface"
                width="1200"
                height="800"
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            </picture>
          </div>
        </div>

      </div>
      <Footer transparent={true} />
    </main>
              </>
  )
}
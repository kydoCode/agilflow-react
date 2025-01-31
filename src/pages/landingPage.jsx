import React from 'react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020B2D] via-[#123363] to-[#0D8B7D]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#123363] text-xl font-bold">A</span>
            </div>
            <a href="/" className="text-white text-2xl font-bold">
              AgilFlow
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium">
              Log in
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              AgilFlow
            </h1>
            <h2 className="text-xl text-white/80 mb-8 leading-relaxed">
              Créez, gérez, suivez et travaillez collaborativment vos US projets métier
            </h2>
            <button className="bg-white text-[#123363] px-8 py-3 rounded-full hover:bg-white/90 transition-colors font-medium text-lg">
              Register
            </button>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="bg-[#020B2D]/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img 
                src="/placeholder.svg?height=400&width=600"
                alt="AgilFlow Dashboard Interface"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Decorative gradient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0D8B7D]/20 to-[#123363]/20 rounded-2xl blur-2xl -z-10"></div>
          </div>
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
      </div>
    </div>
  )
}
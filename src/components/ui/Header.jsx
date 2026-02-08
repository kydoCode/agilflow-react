import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useStore } from '../../store';
import logo_webp from '../../assets/images/agilflow_logo_nobg.webp';
import logo from '../../assets/images/agilflow_logo_nobg.png';


export default function Header({classToPass}) {
    const navigate = useNavigate();
    const { isAuthenticated, user, logout, initializeAuth } = useStore();

    useEffect(() => {
      initializeAuth();
    }, [initializeAuth]);

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

  return (
      <header className={classToPass}>
          <nav className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Link to="/">
                    <picture>
                      <source srcSet={logo_webp} type="image/webp" />
                      <img src={logo} alt="AgilFlow Logo" width="32" height="32" className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </picture>
                  </Link>
                </div>
                <Link to="/" className="hidden min-[400px]:block text-white text-lg sm:text-2xl font-bold relative">
                  AgilFlow
                </Link>
              </div>
    
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
                {isAuthenticated ? (
                  <>
                    <button 
                      onClick={() => navigate('/profile')}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-medium hover:bg-white/20 transition-colors cursor-pointer flex-shrink-0"
                    >
                      {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="bg-white text-[#123363] px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-2 rounded-full hover:bg-white/90 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => navigate('/login')}
                    className="bg-white text-[#123363] px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-2 rounded-full hover:bg-white/90 transition-colors font-medium text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
                  >
                    Log in
                  </button>
                )}
              </div>
            </div>
          </nav>
          </header>
  );
}
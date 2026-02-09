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
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                  <Link to="/">
                    <picture>
                      <source srcSet={logo_webp} type="image/webp" />
                      <img src={logo} alt="AgilFlow Logo" width="32" height="32" className="w-8 h-8"/>
                    </picture>
                  </Link>
                </div>
                <Link to="/" className="text-white text-base sm:text-xl md:text-2xl font-bold truncate hidden min-[400px]:block">
                  AgilFlow
                </Link>
              </div>
    
              <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
                {isAuthenticated ? (
                  <>
                    <button 
                      onClick={() => navigate('/profile')}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-xs sm:text-base font-medium hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="bg-white text-[#123363] px-3 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-white/90 transition-colors font-medium text-xs sm:text-base"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => navigate('/login')}
                    className="bg-white text-[#123363] px-3 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-white/90 transition-colors font-medium text-xs sm:text-base"
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
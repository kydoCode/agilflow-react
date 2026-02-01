import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useStore } from '../../store';
import logo from '../../assets/images/agilflow_logo_nobg.png';


export default function Header({classToPass}) {
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useStore();

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

  return (
      <header className={classToPass}>
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Link to="/">
                    <img src={logo} alt="AgilFlow Logo" className="w-8 h-8"/>
                  </Link>
                </div>
                <Link to="/" className="text-white text-2xl font-bold relative">
                  AgilFlow
                </Link>
              </div>
    
              <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                  <>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium hover:bg-white/20 transition-colors">
                      {user?.firstName ? user.firstName.charAt(0).toUpperCase() : '?'}
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => navigate('/login')}
                    className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
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
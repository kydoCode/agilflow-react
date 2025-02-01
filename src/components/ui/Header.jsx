import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../../assets/images/agilflow_logo_nobg.png';


export default function Header() {
      const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
          <nav className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  {/* <a href="/" className="text-[#123363] text-xl font-bold">A</a> */}
                  <Link to="/">
                    <img src={logo} alt="AgilFlow Logo" className="w-8 h-8"/>
                  </Link>
                </div>
                <Link to="/" className="text-white text-2xl font-bold relative">
                  AgilFlow
                </Link>
                  {/* Ligne reliant le logo et le texte */}
                 {/* <div className="absolute left-12 top-1/2 w-6 h-[2px] bg-white"></div> */}
              </div>
    
              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium hover:bg-white/20 transition-colors">
                      JD {/*"A remplacer par le nom de l'utilisateur remontant de la table User"*/}
                    </div>
                    <button 
                      onClick={() => setIsLoggedIn(false)}
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
  );
}
// import React, { useState } from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import logo from '../../assets/images/agilflow_logo_nobg.png';


// export default function Header() {
//       const navigate = useNavigate()
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//   return (
//           <nav className="container mx-auto px-4 py-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   {/* <a href="/" className="text-[#123363] text-xl font-bold">A</a> */}
//                   <Link to="/">
//                     <img src={logo} alt="AgilFlow Logo" className="w-8 h-8"/>
//                   </Link>
//                 </div>
//                 <Link to="/" className="text-white text-2xl font-bold relative">
//                   AgilFlow
//                 </Link>
//                   {/* Ligne reliant le logo et le texte */}
//                  {/* <div className="absolute left-12 top-1/2 w-6 h-[2px] bg-white"></div> */}
//               </div>
    
//               <div className="flex items-center space-x-4">
//                 {isLoggedIn ? (
//                   <>
//                     <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium hover:bg-white/20 transition-colors">
//                       JD {/*"A remplacer par le nom de l'utilisateur remontant de la table User"*/}
//                     </div>
//                     <button 
//                       onClick={() => setIsLoggedIn(false)}
//                       className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
//                     >
//                       Log out
//                     </button>
//                   </>
//                 ) : (
//                   <button 
//                     onClick={() => navigate('/login')}
//                     className="bg-white text-[#123363] px-6 py-2 rounded-full hover:bg-white/90 transition-colors font-medium"
//                   >
//                     Log in
//                   </button>
//                 )}
//               </div>
//             </div>
//           </nav>
//   );
// }
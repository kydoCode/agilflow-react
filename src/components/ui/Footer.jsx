import { useNavigate, Link } from 'react-router-dom'

export default function Footer({ transparent = false }) {
    return (
<div className={`bottom-0 left-0 right-0 text-center text-sm py-4 z-10 ${
  transparent 
    ? 'bg-transparent text-white/80 border-t border-white/10' 
    : 'bg-gray-50 text-gray-600 border-t border-gray-200'
}`}>
  <p>
    © 
    <Link target="_blank" to="https://www.sylvainclement.dev/" className={`transition-colors ${
      transparent ? 'hover:text-white' : 'hover:text-gray-800'
    }`}>
    {new Date().getFullYear()} Kydocode{' '}
    </Link>{' '}
    |{' '}
    <Link target="_blank" to="/legal" className={`transition-colors ${
      transparent ? 'hover:text-white' : 'hover:text-gray-800'
    }`}>
      Mentions légales
    </Link>{' '}
    |{' '}
    <Link target="_blank" to="/privacy-policy" className={`transition-colors ${
      transparent ? 'hover:text-white' : 'hover:text-gray-800'
    }`}>
      Politique de confidentialité
    </Link>
  </p>
</div>
    )
};
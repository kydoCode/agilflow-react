import { useNavigate, Link } from 'react-router-dom'

export default function Footer() {
    return (
<div className="bottom-0 left-0 right-0 text-center text-gray-600 text-sm py-4 z-10 bg-gray-50 border-t border-gray-200">
  <p>
    © 
    <Link target="_blank" to="https://www.sylvainclement.dev/" className="hover:text-gray-800 transition-colors">
    {new Date().getFullYear()} Kydocode{' '}
    </Link>{' '}
    |{' '}
    <Link target="_blank" to="/legal" className="hover:text-gray-800 transition-colors">
      Mentions légales
    </Link>{' '}
    |{' '}
    <Link target="_blank" to="/privacy-policy" className="hover:text-gray-800 transition-colors">
      Politique de confidentialité
    </Link>
  </p>
</div>
    )
};
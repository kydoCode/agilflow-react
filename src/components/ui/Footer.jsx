import { useNavigate, Link } from 'react-router-dom'

export default function Footer({classToPass}) {
    return (
        <>
<footer className={classToPass}>
<div className="bottom-0 left-0 right-0 text-center text-white/60 text-sm py-4 z-10">
  <p>
    © 
    <Link target="_blank" to="https://www.sylvainclement.dev/" className="hover:text-white/80 transition-colors">
    {new Date().getFullYear()} Kydocode{' '}
    </Link>{' '}
    |{' '}
    <Link to="/legal" className="hover:text-white/80 transition-colors">
      Mentions légales
    </Link>{' '}
    |{' '}
    <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">
      Politique de confidentialité
    </Link>
  </p>
</div>
</footer>
</>
    )
};
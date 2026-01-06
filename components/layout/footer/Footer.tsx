import Link from 'next/link'
import { navLinks } from "@/constans"


const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-inner">
    <div className="footer-brand">
      <span className="footer-logo">Sharkny</span>
      <span className="footer-tagline">Write to learn. Share to remember.</span>
    </div>

    <nav className="footer-nav">
      {navLinks.map((link)=>(
        <Link 
        key={link.name}
        className="nav-link" 
        href={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
  <div className="footer-bottom">
    © 2025 Sharkny. Built for developers who learn in public.
  </div>
</footer>
  )
}

export default Footer
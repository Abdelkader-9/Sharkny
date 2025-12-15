import Link from "next/link"
import MobileNav from "./MobileNav"

export const navLinks = [
  {
    name:'Home',
    href:'/'
  },
  {
    name:'Articles',
    href:'/'
  },
  {
    name:'Contact',
    href:'/'
  },
] 
const Navbar = () => {
  return (
    <nav className='nav shadow-md border-none'>
      <div className='nav-container'>
        <div>
          <Link
          href="/"
          >
            <h1 className='logo-text'>Sharkny</h1> 
          </Link>
          
        </div>
        <div className="nav-menu">
          {navLinks.map((link)=>(
            <Link 
            href={link.href}
            key={link.name}
            className="nav-link font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
import Link from "next/link"
import MobileNav from "./MobileNav"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export const navLinks = [
  {
    name:'Home',
    href:'/'
  },
  {
    name:'Articles',
    href:'/articles'
  },
  {
    name:'Contact',
    href:'/contact'
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
                <SignedOut>
                      <SignInButton >
                        <button className="border shadow-md text-ceramic-white rounded-lg font-semibold text-sm sm:text-base h-10 sm:h-12 px-3 sm:px-5 cursor-pointer">
                          Sign In
                        </button>
                      </SignInButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
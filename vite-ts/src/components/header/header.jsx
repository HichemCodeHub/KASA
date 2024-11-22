import logo from "../../assets/logo/LOGO.svg";
import { Link, NavLink } from 'react-router-dom'
import './header.css'


function Header() {
   return (
      <nav className='ContHeader'>
         <Link to="/">
            <img className='HomeLogo' alt='Logo de kasa' src={logo} />
         </Link>

         <div>
            <NavLink to="/" className='StyledLink'>
               Accueil
            </NavLink>

            <NavLink to="/about" className='StyledLink'>
               À Propos
            </NavLink>
         </div>
      </nav>
   )
 }
 
 export default Header
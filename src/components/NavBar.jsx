import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='navbar-links'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink to='/favorites' className='nav-link'>
          Favorites
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
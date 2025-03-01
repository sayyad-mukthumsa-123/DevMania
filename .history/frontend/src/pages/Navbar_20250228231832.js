import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-dark">
        <h1>
          <Link to='/'><i className='fas fa-code'></i> Developers Hub</Link>
        </h1>
        <ul>
          <li><Link to="/register">Signup</Link></li>
          <li><Link to="/login">Signin</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

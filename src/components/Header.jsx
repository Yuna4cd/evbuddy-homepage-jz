import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import logo from '../assets/white_logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <section className="logo">
        <Link to="/">
          <img src={logo} alt="EV Buddy logo" />
        </Link>
      </section>

      {/* Hamburger (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation */}
      <section className={`navLink ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul onClick={() => setMenuOpen(false)}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/investments">Investments</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/rentals">Rentals</NavLink></li>
          </ul>
        </nav>
      </section>

      {/* User Actions */}
      <section className="userActions">
        <button className="loginBtn">Login</button>
        <button className="signupBtn">Sign Up</button>
      </section>
    </header>
  );
}

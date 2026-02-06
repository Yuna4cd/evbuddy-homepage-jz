import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/white_logo.png';
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowEarlyAccess(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        {/* Logo */}
        <section className="logo">
          <Link to="/home">
            <img src={logo} alt="EV Buddy logo" />
          </Link>
        </section>

        {/* Hamburger */}
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
            <ul className='header-navlink' onClick={() => setMenuOpen(false)}>
              <li><NavLink to="/home">Home</NavLink></li>
              <ServicesDropdown />
              <li><NavLink to="/investments">Investments</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/rentals">Rentals</NavLink></li>
            </ul>
          </nav>
        </section>
        {/* Reopen Tab */}
        <div
          className="earlyAccessTab"
          onClick={() => {
            setShowEarlyAccess(true);
          }}
        >
          <p>Early Access</p>
        </div>
      </header>
      {/* Early Access Popup */}
      {showEarlyAccess && (
        <aside className="earlyAccess">
          <button
            className="closeBtn"
            onClick={() => {
              setShowEarlyAccess(false);
              setDismissed(true);
            }}
            aria-label="Close"
          >
            ×
          </button>

          <h4>Get Exclusive Early Access</h4>
          <p>
            Want to be the first to know when we release something new?
            Sign up for VIP updates.
          </p>

          <input
            type="email"
            className="emailInput"
            placeholder="Email"
          />
          <button className="ctaBtn">Continue</button>
        </aside>
      )}

    </>
  );
}

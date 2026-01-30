import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/white_logo.png'

export default function Header() {
    return (
        <header>
            <section className="logo">
               <Link to="/">
                    <img
                        src={logo}
                        alt="ev buddy Logo"
                    />
                </Link>
            </section>
            <section className='navLink'>
                <nav>
                    <ul>    
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/investments">Investments</NavLink></li>
                        <li><NavLink to="/rentals">Rentals</NavLink></li>
                    </ul>
                </nav>
            </section>
            <section className="userActions">
                <button className="loginBtn">Login</button>
                <button className="signupBtn">Sign Up</button>
            </section>
        </header>
    );
}
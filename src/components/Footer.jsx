// components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🔌</span>
            <span className="logo-text">ev buddy.</span>
          </div>

          <p className="footer-description">
            Powering the future of EV charging. Eliminate range anxiety and
            create a flexible, mobile charging ecosystem used by everyone.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Products</h4>
            <a href="#">EVChargeShare</a>
            <a href="#">Installation</a>
            <a href="#">Rent a Charger</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">Investment</a>
            <a href="#">Network</a>
            <a href="#">News</a>
          </div>

          <div className="footer-column">
            <h4>Support & Help</h4>
            <span>877-772-3393</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © 2026 EV Buddy Inc. All rights reserved.
      </div>
    </footer>
  );
}

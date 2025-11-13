import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Vishal Services</h3>
          <p>Quality Plumbing & Electrician Services</p>
        </div>

        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Vishal Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from 'react';
import '../styles/landing.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky-header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-job">Job</span>
          <span className="logo-fair">Fair</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-button">
          <button type="button" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>
        
        <div className="desktop-cta">
          <a 
            href="#demo" 
            className="primary-button"
            onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
          >
            Request Demo
          </a>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
          <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <a 
            href="#demo" 
            className="primary-button mobile-request-demo"
            onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

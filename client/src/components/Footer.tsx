import '../styles/landing.css';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <span className="logo-job">Job</span>
              <span className="logo-fair">Fair</span>
            </div>
            <p>
              SoluteLabs' smart hiring platform for effortless recruitment and smarter decisions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#benefits" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
                >
                  Benefits
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About SoluteLabs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@solutelabs.com">info@solutelabs.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>SoluteLabs HQ, Tech Park, San Francisco</span>
              </li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoluteLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

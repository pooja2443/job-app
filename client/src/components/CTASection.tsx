import '../styles/landing.css';

const CTASection = () => {
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
    <section id="demo" className="cta-section">
      <div className="container">
        <h2>Ready to Transform Your Hiring Process?</h2>
        <p>
          Join SoluteLabs in making smarter hiring decisions with our powerful platform designed for modern teams.
        </p>
        <div className="cta-buttons">
          <a 
            href="#contact" 
            className="cta-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Request a Demo
          </a>
          <a 
            href="#features" 
            className="cta-secondary"
            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

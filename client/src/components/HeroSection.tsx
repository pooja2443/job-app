import '../styles/landing.css';

const HeroSection = () => {
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
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Effortless Hiring.<br/>
              <span className="text-primary">Smarter Decisions.</span>
            </h1>
            <p>
              Streamline your recruitment process with structured workflows, seamless collaboration, and real-time tracking. From job posting to final selection, JobFair ensures efficiency at every step.
            </p>
            <div className="hero-buttons">
              <a 
                href="#demo" 
                className="primary-button"
                onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
              >
                Get Started
              </a>
              <a 
                href="#features" 
                className="secondary-button"
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Team collaboration on hiring platform" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

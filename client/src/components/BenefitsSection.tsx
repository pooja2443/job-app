import '../styles/landing.css';

interface Benefit {
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      title: "Streamlined Process",
      description: "Reduce hiring time by up to 85% with our optimized workflows and automated processes."
    },
    {
      title: "Improved Collaboration",
      description: "Enhanced team communication and seamless feedback collection to make better hiring decisions."
    },
    {
      title: "Data-Backed Decisions",
      description: "Comprehensive analytics and reporting tools to help you identify the best candidates."
    },
    {
      title: "Customizable Workflow",
      description: "Adapt the platform to your specific hiring needs with customizable templates and stages."
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-image">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Team using JobFair platform" 
            />
          </div>
          <div className="benefits-text">
            <h2>Why Choose JobFair?</h2>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div className="benefit-item" key={index}>
                  <div className="benefit-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

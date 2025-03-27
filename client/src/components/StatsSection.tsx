import '../styles/landing.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <p className="stat-description">Reduction in hiring time</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <p className="stat-description">Team collaboration satisfaction</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">40%</div>
            <p className="stat-description">Increase in quality hires</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import "../styles/landing.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: "fas fa-briefcase",
      title: "Centralized Job Management",
      description:
        "Easily create, update, and manage job openings with customizable templates and workflows.",
    },
    {
      icon: "fas fa-user-check",
      title: "Candidate Tracking",
      description:
        "Organize applications, schedule interviews, and monitor progress throughout the entire hiring pipeline.",
    },
    {
      icon: "fas fa-lock",
      title: "Role-Based Access",
      description:
        "Secure and structured permissions for HR, interviewers, and hiring managers with customizable access controls.",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Seamless Scheduling",
      description:
        "Coordinate interviews effortlessly with built-in tools that sync with team calendars and send automated reminders.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Data-Driven Insights",
      description:
        "Make informed hiring decisions with structured analytics and comprehensive reporting tools.",
    },
    {
      icon: "fas fa-comments",
      title: "Team Collaboration",
      description:
        "Enable seamless communication between team members with integrated messaging and feedback tools.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Key Features</h2>
          <p>
            JobFair simplifies every aspect of your hiring process with powerful
            features designed for efficiency and collaboration.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

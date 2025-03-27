import '../styles/landing.css';

interface Testimonial {
  imageSrc: string;
  name: string;
  position: string;
  quote: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      name: "Sarah Johnson",
      position: "HR Director",
      quote: "JobFair has transformed our hiring process. What used to take weeks now takes days, and the quality of our hires has improved dramatically."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      name: "David Chen",
      position: "Engineering Manager",
      quote: "The collaborative features in JobFair have made it so much easier to get input from my team during the hiring process. We're all on the same page now."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      name: "Maya Patel",
      position: "Product Manager",
      quote: "The data insights have been game-changing for our hiring decisions. We can now clearly see which candidates are the best fit for our team."
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Team Says</h2>
          <p>
            Hear from our team members who use JobFair for their hiring processes.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img 
                  src={testimonial.imageSrc}
                  alt={testimonial.name} 
                  className="testimonial-image"
                />
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Fast & Simple",
      description: "Enjoy a smooth and easy browsing experience."
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Clean layouts with beautiful colors and details."
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Explore our website on mobile, tablet, or desktop."
    }
  ];

  return (
    <div className="page home-page">
      <section className="hero">
        <span className="hero-tag">WELCOME TO MY WEBSITE</span>

        <h1>
          Build something <span>amazing</span> with React.
        </h1>

        <p>
          Learning React concepts, routing, hooks, and interactive
          web development through a real website.
        </p>

        <div className="hero-actions">
          <Link to="/product" className="btn btn-primary">
            Explore Products →
          </Link>

          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <strong>4+</strong>
            <span>Website Pages</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive Design</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Built for Learning</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Everything in one place</h2>
          <p>Simple, useful, and designed around your experience.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

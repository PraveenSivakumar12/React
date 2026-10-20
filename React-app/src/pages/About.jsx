
import { useState } from "react";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "Make technology easier to understand and use.",
      details:
        "We focus on creating simple, accessible digital experiences that help people explore technology with confidence."
    },
    {
      icon: "💡",
      title: "Our Approach",
      description: "Learn by building real projects.",
      details:
        "We combine practical examples, interactive interfaces, and modern web technologies to make learning engaging."
    },
    {
      icon: "🚀",
      title: "Our Vision",
      description: "Keep improving through innovation.",
      details:
        "Our goal is to keep exploring new ideas and build better experiences through continuous learning."
    }
  ];

  return (
    <div className="page about-page">
      <section className="page-banner">
        <span className="hero-tag">GET TO KNOW US</span>
        <h1>About Our Website</h1>
        <p>
          A learning project focused on modern design,
          React components, and interactive experiences.
        </p>
      </section>

      <section className="about-intro">
        <div className="about-visual">
          <span>R</span>
          <div className="visual-caption">React · Learn · Create</div>
        </div>

        <div className="about-copy">
          <h2>Turning ideas into experiences</h2>
          <p>
            This website is built to explore React components,
            reusable layouts, routing, state management,
            and responsive CSS.
          </p>
          <p>
            Each page demonstrates how small components can
            work together to create a complete website.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <span>WHAT MATTERS TO US</span>
          <h2>Our values</h2>
          <p>Click a card to discover more.</p>
        </div>

        <div className="feature-grid">
          {values.map((value, index) => (
            <article
              className={`feature-card interactive-card ${
                activeCard === index ? "expanded" : ""
              }`}
              key={value.title}
              onClick={() =>
                setActiveCard(
                  activeCard === index ? null : index
                )
              }
            >
              <div className="feature-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>

              {activeCard === index && (
                <p className="card-details">{value.details}</p>
              )}

              <span className="card-toggle">
                {activeCard === index ? "Show less −" : "Read more +"}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

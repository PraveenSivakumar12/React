
import { useState } from "react";

const services = [
  {
    icon: "💻",
    title: "Website Development",
    description: "Modern, responsive websites for your ideas.",
    details:
      "Build responsive websites with reusable components, clean layouts, and modern frontend technologies."
  },
  {
    icon: "🎨",
    title: "Interactive Web Design",
    description: "Beautiful interfaces with engaging interactions.",
    details:
      "Create user-friendly layouts with interactive elements, clear navigation, and consistent visual styling."
  },
  {
    icon: "📱",
    title: "Application Development",
    description: "Practical applications for everyday needs.",
    details:
      "Explore application interfaces, component-based development, and useful features for different devices."
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "Improve your digital presence.",
    details:
      "Learn about online visibility, digital content, and ways to connect with the right audience."
  }
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="page contact-page">
      <section className="page-banner">
        <span className="hero-tag">LET'S CONNECT</span>
        <h1>How Can We Help?</h1>
        <p>
          Explore our services and get in touch to discuss your ideas.
        </p>
      </section>

      <section className="contact-services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>What we do</h2>
          <p>Select a service to learn more.</p>
        </div>

        <div className="feature-grid">
          {services.map((service, index) => (
            <button
              type="button"
              className={`feature-card service-card ${
                selectedService === index ? "expanded" : ""
              }`}
              key={service.title}
              onClick={() =>
                setSelectedService(
                  selectedService === index ? null : index
                )
              }
              aria-expanded={selectedService === index}
            >
              <span className="feature-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {selectedService === index && (
                <span className="service-details">
                  {service.details}
                </span>
              )}

              <span className="card-toggle">
                {selectedService === index ? "Show less −" : "Explore service +"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div>
          <h2>Have a project in mind?</h2>
          <p>Let's talk about your ideas and how to bring them to life.</p>
        </div>

        <a className="btn btn-primary" href="tel:9943766183">
          ☎ Call 9943766183
        </a>
      </section>
    </div>
  );
}

import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          EV Charger Installation for Scalable Power & Revenue
        </h1>

        <p className="hero-subtitle">
          Transform electric vehicles into a distributed energy opportunity
          with intelligent, revenue-ready charging infrastructure.
        </p>

        <div className="hero-actions">
          <button className="hero-button primary">
            Install Today
          </button>
          <button className="hero-button secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

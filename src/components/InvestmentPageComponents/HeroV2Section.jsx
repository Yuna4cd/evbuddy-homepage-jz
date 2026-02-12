import "./HeroV2Section.css";
import heroImage from "../../assets/image1.jpg";

export default function HeroV2Section() {
  return (
    <section className="hero-v2">
      <div className="hero-v2-container">
        <h1 className="hero-v2-title">
          Range Anxiety is Dead
        </h1>

        <p className="hero-v2-subtitle">
          EV Buddy delivers portable vehicle-to-vehicle rapid charging —
          adding range anywhere, anytime.
        </p>

        <img
          src={heroImage}
          alt="EV Buddy V2V Charging"
          className="hero-v2-image"
        />

        <button className="hero-v2-button">
          I'm Interested in Investing
        </button>
      </div>
    </section>
  );
}

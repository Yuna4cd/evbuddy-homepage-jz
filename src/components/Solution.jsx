// components/Solution.jsx
import './Solution.css';

export default function Solution() {
  return (
    <section className="solution-section">
      <h2 className="solution-title">How can we help?</h2>

      <div className="solution-cards">
        {/* Problem Card */}
        <div className="solution-card problem">
          <div className="solution-header">
            <span className="dot red" />
            <h3>The Problem</h3>
          </div>
          <p>
            Stranded EV drivers face towing costs averaging $200+, hours of
            stress, and wasted time. Current charging infrastructure leaves
            gaps that leave drivers vulnerable.
          </p>
        </div>

        {/* Solution Card */}
        <div className="solution-card success">
          <div className="solution-header">
            <span className="dot green" />
            <h3>Our Solution</h3>
          </div>
          <p>
            EV Buddy's patent-pending V2V rapid charger lets any EV share range
            instantly, anywhere. No tow truck needed—just power on demand.
          </p>
        </div>
      </div>
    </section>
  );
}

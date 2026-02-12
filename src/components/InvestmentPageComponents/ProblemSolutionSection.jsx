import "./ProblemSolutionSection.css";

export default function ProblemSolutionSection() {
  return (
    <section className="problem-solution">
      <div className="ps-container">

        <div className="ps-card problem">
          <h3>The Problem</h3>
          <p>
            EV drivers face towing costs, long wait times,
            and unreliable roadside charging infrastructure.
          </p>
        </div>

        <div className="ps-card solution">
          <h3>Our Solution</h3>
          <p>
            A patented vehicle-to-vehicle rapid charger
            that delivers power instantly — no tow truck required.
          </p>
        </div>

      </div>
    </section>
  );
}

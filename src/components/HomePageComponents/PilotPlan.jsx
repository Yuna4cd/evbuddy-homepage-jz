// components/PilotPlan.jsx
import './PilotPlan.css';

export default function PilotPlan() {
  const regions = [
    {
      title: 'Northeast',
      desc: 'Pilot Program Launching Soon',
    },
    {
      title: 'Westcoast',
      desc: 'Pilot Program Launching Soon',
    },
  ];

  return (
    <section className="pilot-section">
      <div className="pilot-container">
        <h2 className="pilot-title">Launch This Year</h2>

        <p className="pilot-subtitle">
          Full-Coverage EV Charging Across North America. We are expanding
          rapidly to serve you better.
        </p>

        <div className="pilot-grid">
          {regions.map((region, index) => (
            <div className="pilot-card" key={index}>
              <div className="pilot-icon">🗺️</div>
              <h4>{region.title}</h4>
              <p>{region.desc}</p>
            </div>
          ))}
        </div>

        <p className="pilot-footer">
          We are strategically launching in key markets with high EV density to
          maximize impact and efficiency.
        </p>
      </div>
    </section>
  );
}

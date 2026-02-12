import "./ValuePropositionSection.css";

const values = [
  {
    title: "Revenue Optimization",
    description:
      "Streaming media and intelligent load balancing reduce break-even time."
  },
  {
    title: "Operational Efficiency",
    description:
      "Automated power distribution adapts in real-time to demand."
  },
  {
    title: "Future-Proof Deployment",
    description:
      "Built for expanding EV adoption without infrastructure redesign."
  }
];

export default function ValuePropositionSection() {
  return (
    <section className="value-section">
      <div className="value-container">
        <h2 className="value-title">
          Why Choose EV Buddy Cluster
        </h2>

        <div className="value-grid">
          {values.map((item) => (
            <div key={item.title} className="value-card">
              <h3 className="value-card-title">
                {item.title}
              </h3>
              <p className="value-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

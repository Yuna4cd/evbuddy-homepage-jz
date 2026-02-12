import "./MarketSection.css";

const stats = [
  { icon: "$", value: "$84B", label: "EV charging market size" },
  { icon: "⚡", value: "30%", label: "YoY EV sales growth" },
  { icon: "👥", value: "$6B", label: "Roadside assistance market" },
  { icon: "🏅", value: "3x", label: "Revenue streams ready" }
];

export default function MarketSection() {
  return (
    <section className="market">
      <h2 className="market-title">
        Massive Market Opportunity
      </h2>

      <div className="market-container">
        {stats.map((stat) => (
          <div key={stat.label} className="market-pill">
            <div className="market-icon">{stat.icon}</div>
            <div className="market-value">{stat.value}</div>
            <div className="market-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

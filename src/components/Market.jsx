// components/Market.jsx
import './Market.css';

export default function Market() {
  const highlights = [
    'First Portable V2V Charger',
    'Patent-Pending Technology',
    '3x Scalable Revenue Streams',
    'Pilot Program Ready',
    'Strategic Infrastructure Play',
    'Disruptive CaaS Model',
  ];

  const stats = [
    { value: '$65B', label: 'EV Charging Market' },
    { value: '23%', label: 'YoY EV Growth' },
    { value: '$5B', label: 'Roadside Market' },
    { value: '287M+', label: 'EVs by 2030' },
  ];

  return (
    <section className="market-section">
      <div className="market-container">
        <div className="market-content">
          {/* Left */}
          <div className="market-left">
            <h2 className="market-title">
              Massive Market
              <br />
              Infrastructure
              <br />
              Opportunity
            </h2>

            <p className="market-description">
              The EV revolution is creating a massive infrastructure gap.
              EV Buddy is positioned to disrupt the market with a
              hyper-scalable, mobile-first charging network. Invest in the
              bridge to future mobility.
            </p>

            <ul className="market-list">
              {highlights.map((item, index) => (
                <li key={index}>
                  <span className="check" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="market-cta">
              Invest in EVBUDDY <span>→</span>
            </button>

            <p className="market-footnote">
              Join 100+ early visionaries. Phase 1 reservation closing soon.
            </p>
          </div>

          {/* Right */}
          <div className="market-right">
            {stats.map((stat, index) => (
              <div className="market-stat" key={index}>
                <div className="market-stat-value">{stat.value}</div>
                <div className="market-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

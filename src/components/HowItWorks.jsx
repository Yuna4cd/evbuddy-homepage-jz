// components/HowItWorks.jsx
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect Donor',
      desc: 'Donor EV plugs securely into EV Buddy charger.',
      icon: '🔌',
    },
    {
      title: 'Power Transfer',
      desc: 'Donor EV starts charging EV Buddy charging port.',
      icon: '🔄',
    },
    {
      title: 'Vehicle Ready',
      desc: 'Energy flows at ~1 mile gain per minute.',
      icon: '📄',
    },
    {
      title: 'Vehicle Ready',
      desc: 'Recipient EV battery gains sufficient range.',
      icon: '🚗',
    },
    {
      title: 'Back on Road',
      desc: 'Unplug and drive away — no tow truck needed!',
      icon: '🛣️',
    },
  ];

  return (
    <section className="how-section">
      <div className="how-container">
        <h2 className="how-title">How EVChargeShare Works</h2>
        <p className="how-subtitle">
          Simple steps to get you back on the road.
        </p>

        <div className="how-steps">
          {steps.map((step, index) => (
            <div className="how-step-wrapper" key={index}>
              <div className="how-step">
                <div className="how-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <span className="how-arrow">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

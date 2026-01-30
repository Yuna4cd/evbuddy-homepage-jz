// components/HowItWorks.jsx
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect Vehicles',
      desc: 'Cables plugged securely into charging ports of stranded vehicle and rescue vehicle',
      icon: '🔌',
    },
    {
      title: 'Start Power Transfer',
      desc: 'Connection established, Press Start Charging button.',
      icon: '🔄',
    },
    {
      title: 'Energy Flows',
      desc: 'Power transfer from the donor to recipient at 1 mile per minute.',
      icon: '📄',
    },
    {
      title: 'Back on the Road ',
      desc: 'Unplug and drive away',
      icon: '🚗',
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

// components/Charger.jsx
import './Charger.css';

export default function Charger() {
  const features = [
    {
      title: 'EVChargeShare (V2V)',
      desc: 'Our patent-pending portable V2V fast DC charging system allows for Charger-as-a-Service (CaaS). Get a mile of range every minute.',
      icon: '⚡',
    },
    {
      title: 'Installation Services',
      desc: 'Future-ready charging hubs with dynamic power allocation, 32-inch multimedia touch screens, and smart cable management.',
      icon: '🔁',
    },
    {
      title: 'EV Buddy Network',
      desc: 'A comprehensive app to find chargers, manage charging sessions, and handle payments seamlessly.',
      icon: '🏠',
    },
    {
      title: 'Investment Opportunities',
      desc: 'Join the $84B EV market. We are crowdfunding to expand our network and technology.',
      icon: '✨',
    },
    {
      title: 'Rent a Charger',
      desc: 'Turn your charger into income or find a charger instantly. Join our peer-to-peer charging network.',
      icon: '🚚',
    },
    {
      title: 'Latest News',
      desc: "Stay updated with the latest developments in the EV world and EV Buddy's expansion.",
      icon: '📰',
    },
  ];

  return (
    <section className="charger-section">
      <div className="charger-container">
        <h2 className="charger-title">
          V2V: The Portable Rapid Charger
        </h2>

        <p className="charger-subtitle">
          Our innovative V-to-V Smart Jumper Cable technology is designed
          to eliminate EV charging anxiety, providing a faster, easier,
          and more cost-efficient solution to build the much-needed EV
          charging infrastructure.
        </p>

        <div className="charger-grid">
          {features.map((item, index) => (
            <div className="charger-card" key={index}>
              <div className="charger-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

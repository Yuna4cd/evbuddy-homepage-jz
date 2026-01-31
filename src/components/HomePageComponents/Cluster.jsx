// components/Cluster.jsx
import './Cluster.css';
import ClusterImage from '../../assets/evbuddy-cluster.jpg'

export default function Cluster() {
  const features = [
    {
      title: 'Scalable Power',
      desc: 'Dynamic Power Allocation ensures maximum efficiency and scalability for high-demand environments.',
    },
    {
      title: '32" Multimedia Touch Screen',
      desc: 'Intuitive user interaction combined with targeted advertising opportunities to boost revenue.',
    },
    {
      title: 'Smart Cable Management',
      desc: 'Future-proof organizational systems for a clean, safe, and efficient charging experience.',
    },
    {
      title: 'Safety & Certification',
      desc: 'Built to the highest international standards, ensuring reliability and full regulatory compliance.',
    },
    {
      title: 'Streaming Revenue',
      desc: 'Lower break-even point with integrated multimedia monetization and advertising systems.',
    },
  ];

  return (
    <section className="cluster-section">
      <div className="cluster-container">
        <h2 className="cluster-title">EVBuddy Cluster</h2>

        <p className="cluster-subtitle">
          The EV Buddy Cluster is a dynamic, future-ready charging hub built for
          scale, performance, and profitability. Designed for high-demand
          environments, this advanced, scalable solution transforms EV charging
          into a profitable business opportunity.
        </p>

        <div className="cluster-content">
          {/* Left: Features */}
          <div className="cluster-features">
            <h3 className="cluster-features-title">Advanced Features</h3>

            <div className="cluster-features-grid">
              {features.map((item, index) => (
                <div className="cluster-feature-card" key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="cluster-image-wrapper">
            <img
              src={ClusterImage}
              alt="EV Buddy Cluster"
              className="cluster-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

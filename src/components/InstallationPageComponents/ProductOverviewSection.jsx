import "./ProductOverviewSection.css";
import productImage from "../../assets/evbuddy-cluster.jpg";

const leftFeatures = [
  {
    title: "Scalable Power (50–900kW)",
    description: "Modular architecture supports phased expansion and future-proof deployment."
  },
  {
    title: "Dynamic Power Allocation",
    description: "Optimizes power distribution in real time for simultaneous charging sessions."
  },
  {
    title: '32" Multimedia Touch Screen',
    description: "High-resolution display enables interactive UI and advertising monetization."
  }
];

const rightFeatures = [
  {
    title: "Smart Cable Management",
    description: "Automated retraction improves safety, cable lifespan, and user convenience."
  },
  {
    title: "Safety & Certification",
    description: "Fully compliant with international EV charging and electrical standards."
  },
  {
    title: "Revenue Focused",
    description: "Built-in advertising platform lowers operational break-even threshold."
  }
];


export default function ProductOverviewSection() {
  return (
    <section className="product-overview">
      
      {/* Header */}
      <div className="product-header">
        <h2 className="product-title">EV Buddy Cluster</h2>
        <p className="product-description">
          A future-ready charging hub designed for performance, scale, and
          profitability in high-demand environments.
        </p>
      </div>

      {/* Main 3-Column Layout */}
      <div className="product-content">

        {/* Left Features */}
        <div className="features-column left">
          {leftFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Product Visual */}
        <div className="product-visual">
          <img src={productImage} alt="EV Buddy Cluster" />
        </div>
        
        {/* Right Features */}
        <div className="features-column right">
          {rightFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="product-cta">
        <button className="btn-primary">Install Now</button>
        <button className="btn-secondary">Learn More</button>
      </div>

    </section>
  );
}

/* Reusable Feature Component */
function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

import "./SpecsSection.css";

const specs = [
  { label: "Output Power", value: "50 – 900 kW" },
  { label: "Output Voltage", value: "150 – 1000 V" },
  { label: "Output Current", value: "125 – 500 A" },
  { label: "Charging Points", value: "1 to 4" },
  { label: "Connector Types", value: "CCS, NACS, CHAdeMO, GB/T" }
];

export default function SpecsSection() {
  return (
    <section className="specs-section">
      <div className="specs-container">
        <h2 className="specs-title">
          Technical Specifications
        </h2>

        <div className="specs-grid">
          {specs.map((spec) => (
            <div key={spec.label} className="spec-card">
              <p className="spec-label">{spec.label}</p>
              <p className="spec-value">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

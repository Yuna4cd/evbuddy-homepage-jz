import "./ComparisonSection.css";

export default function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="comparison-container">

        {/* ================= HEADER ================= */}
        <div className="comparison-header">
          <h2>The Ultimate Roadside Charging Comparison</h2>
          <p>
            See how EVChargeShare's V2V system dramatically outperforms
            traditional and current EV rescue solutions in speed,
            safety, and convenience.
          </p>
        </div>

        {/* ================= TABLE ================= */}
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th className="highlight-col">EVChargeShare® V2V</th>
                <th>Towing</th>
                <th>Gasoline</th>
                <th>Battery</th>
                <th>V2L</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Speed</td>
                <td className="highlight-col">DC Level 3<br /><strong>20 kW</strong></td>
                <td>—</td>
                <td>AC Level 2<br />7.5 kW</td>
                <td>DC Level 3<br />20 kW</td>
                <td>AC Level 2<br />7.5 kW</td>
              </tr>

              <tr>
                <td>Cost</td>
                <td className="highlight-col success">$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
                <td>$$$</td>
              </tr>

              <tr>
                <td>Convenience</td>
                <td className="highlight-col success">✔</td>
                <td className="danger">✘</td>
                <td className="danger">✘</td>
                <td className="danger">✘</td>
                <td className="success">✔</td>
              </tr>

              <tr>
                <td>Safety</td>
                <td className="highlight-col success">✔</td>
                <td className="danger">✘</td>
                <td className="danger">✘</td>
                <td className="danger">✘</td>
                <td className="success">✔</td>
              </tr>

              <tr>
                <td>Weight</td>
                <td className="highlight-col">●</td>
                <td>—</td>
                <td className="danger">●●●●</td>
                <td className="danger">●●●●</td>
                <td>—</td>
              </tr>

              <tr>
                <td>Overall</td>
                <td className="highlight-col overall">✔</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= PERFORMANCE GRAPH ================= */}
        <div className="performance-section">
          <h3>Performance At-A-Glance</h3>

          <div className="bar-group">
            <label>EVChargeShare V2V</label>
            <div className="bar green" style={{ width: "100%" }}>20 kW</div>
          </div>

          <div className="bar-group">
            <label>Battery Storage</label>
            <div className="bar blue" style={{ width: "100%" }}>20 kW</div>
          </div>

          <div className="bar-group">
            <label>Gas Generator</label>
            <div className="bar orange" style={{ width: "37%" }}>7.5 kW</div>
          </div>

          <div className="bar-group">
            <label>V2L Adapter</label>
            <div className="bar yellow" style={{ width: "37%" }}>7.5 kW</div>
          </div>

          <p className="cost-note">
            *Comparison based on charging speed (kW) and relative cost efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}

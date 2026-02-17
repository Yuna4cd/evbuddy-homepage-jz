import React from "react";
import "./GainSection.css"

export default function GainSection() {
  return (
    <section className="gain-section">
      <h2>What You Gain</h2>

      <p className="gain-description">
        EV Buddy’s EVChargeShare™ is a patent-pending portable V2V fast DC
        charging system that allows one EV to safely transfer energy to another
        – no tow truck, no generator, no grid required.
      </p>

      <button className="gain-extra">
        Our Charger-as-a-Service (CaaS) model enables EV owners and fleets to
        monetize downtime by becoming mobile energy providers.
      </button>

      <div className="orbit-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`orbit-item orbit-${i}`}>
            <p>Text {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

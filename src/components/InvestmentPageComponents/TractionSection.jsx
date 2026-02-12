import "./TractionSection.css";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

export default function TractionSection() {
  return (
    <section className="traction">

      <h2 className="traction-title">
        Proven Traction & Validation
      </h2>

      <div className="traction-container">

        {/* ROW 1 */}
        <div className="traction-row">
          <div className="traction-image large">
            <img src={image2} alt="Traction Visual" />
          </div>

          <div className="traction-stack">
            <div className="traction-card">
              <div className="traction-icon">✓</div>
              <h4>Pilot Approved</h4>
              <p>Nationwide roadside assistance pilot greenlit</p>
            </div>

            <div className="traction-card">
              <div className="traction-icon">🏆</div>
              <h4>Award Winner</h4>
              <p>2nd place at Synergy 2024 Startup Cube (Las Vegas)</p>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="traction-row">
          <div className="traction-stack">
            <div className="traction-card">
              <div className="traction-icon">🤝</div>
              <h4>Strategic Partners</h4>
              <p>Partnerships in progress with national roadside assistance company, OEMs, fleets</p>
            </div>

            <div className="traction-card">
              <div className="traction-icon">⚡</div>
              <h4>Multiple Pilots Launching</h4>
              <p>Northeast, Bay Area, Oregon markets</p>
            </div>
          </div>

          <div className="traction-image wide">
            <img src={image3} alt="Validation Visual" />
          </div>
        </div>

      </div>
    </section>
  );
}

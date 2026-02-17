import "./HeaderSection.css"

export default function HeaderSection() {
  return (
    <header className="chargeshare-header">
      <div className="chargeshare-inner">
        <h1>Vehicle To Vehicle Charging</h1>

        <p>
          Our innovative Universal EV-to-EV Smart Jumper Cable technology is
          designed to eliminate EV charging anxiety, providing a faster,
          easier, and more cost-efficient solution to build the much-needed EV
          charging infrastructure.
        </p>

        <button className="chargeshare-cta">Preorder Now</button>
      </div>
    </header>
  );
}

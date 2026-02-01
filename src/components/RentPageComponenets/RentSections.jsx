
export default function RentSections() {
    return (
        <div>
            {/* Host Section */}
            <section className="rent-section">
                <h2>Start Earning Instantly</h2>
                <p className="section-subtitle">
                Hosts can turn their charger into an immediate source of income.
                </p>

                <div className="rent-steps">
                <div className="rent-card">
                    <h3>1. Create a Profile</h3>
                    <p>Create a listing profile and verify your charger information.</p>
                </div>
                <div className="rent-card">
                    <h3>2. Set It Up</h3>
                    <p>Set your schedule, pricing, hours & access.</p>
                </div>
                <div className="rent-card">
                    <h3>3. Start Earning</h3>
                    <p>Accept requests and start earning from your bookings.</p>
                </div>
                </div>
            </section>

            {/* Driver Section */}
            <section className="rent-section">
                <h2>Start Charging Instantly</h2>
                <p className="section-subtitle">
                Drivers can use chargers with just 3 simple steps.
                </p>

                <div className="rent-steps">
                <div className="rent-card">
                    <h3>1. Find & Filter</h3>
                    <p>Search nearby chargers with filters.</p>
                </div>
                <div className="rent-card">
                    <h3>2. Book</h3>
                    <p>Book a charger session at an available station.</p>
                </div>
                <div className="rent-card">
                    <h3>3. Charge</h3>
                    <p>Plug in, start charging, and continue your journey.</p>
                </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="rent-section">
                <h2>Why choose us?</h2>

                <div className="rent-steps">
                <div className="rent-card">
                    <h3>Faster</h3>
                    <p>Drive, charge, and go without long wait times.</p>
                </div>
                <div className="rent-card">
                    <h3>Stable</h3>
                    <p>Instant bookings with upfront pricing & access.</p>
                </div>
                <div className="rent-card">
                    <h3>Flexible</h3>
                    <p>Community-powered charging, anytime.</p>
                </div>
                </div>
            </section>
        </div>
    )
}
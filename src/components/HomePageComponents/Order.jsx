// components/Order.jsx
import './Order.css';

export default function Order() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());

    console.log(values);
    // send to backend / API here
  };

  return (
    <section className="order-section">
      <div className="order-container">

        {/* LEFT: Pre-Order */}
        <div className="order-form">
          <h3>Pre-Order Form</h3>
          <p className="order-subtitle">
            Tell us a bit about you and your EV. We'll follow up shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="order-grid">
              <div className="field">
                <label>Full Name *</label>
                <input name="fullName" required />
              </div>

              <div className="field">
                <label>Email Address *</label>
                <input type="email" name="email" required />
              </div>

              <div className="field">
                <label>Phone Number *</label>
                <input name="phone" required />
              </div>

              <div className="field">
                <label>Account Type *</label>
                <select name="accountType" required>
                  <option value="personal">Personal</option>
                  <option value="company">Company</option>
                </select>
              </div>

              <div className="field full">
                <label>Street Address *</label>
                <input name="address" required />
              </div>

              <div className="field">
                <label>City *</label>
                <input name="city" required />
              </div>

              <div className="field">
                <label>State *</label>
                <input name="state" required />
              </div>

              <div className="field">
                <label>ZIP Code *</label>
                <input name="zip" required />
              </div>

              <div className="field">
                <label>EV Type *</label>
                <input name="evType" required />
              </div>

              <div className="field full">
                <label>Comment</label>
                <textarea name="comment" />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Pre-Order
            </button>
          </form>
        </div>

        {/* RIGHT: Subscribe */}
        <div className="order-subscribe">
          <form>
            <h4>Subscribe to receive future updates from EVBUDDY</h4>
            <p>You will receive important updates, promotion and many more cool stuffs from us once you subscribe.</p>
            <input name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
            <p>No spam guaranteed, So please don't send any spam mail.</p>
          </form>
        </div>

      </div>
    </section>
  );
}

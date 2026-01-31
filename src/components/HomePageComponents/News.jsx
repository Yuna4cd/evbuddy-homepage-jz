// components/News.jsx
import './News.css';

export default function News() {
  const articles = [
    {
      source: 'EIN Presswire',
      title: 'EV Buddy: NJ CSIT-Approved Exclusive EV-to-EV Charger',
      desc:
        'EV Buddy is NJ CSIT’s sole approved EV-to-EV charger, recognized for innovation.',
      image: '/news/nj-csit.png',
      link: '#',
    },
    {
      source: 'EIN Presswire',
      title:
        'EV Buddy Opens Waitlist for Mobile V2V DC Fast-Charging Service',
      desc:
        'Drivers & hosts earn delivering on-site V2V DC fast charging on demand.',
      image: '/news/waitlist.png',
      link: '#',
    },
    {
      source: 'EIN Presswire',
      title:
        'EV Buddy x EcoG: Next-Gen V2V Charging Partnership',
      desc:
        'EV Buddy and EcoG sign strategic hardware agreement for advanced V2V.',
      image: '/news/ecog.png',
      link: '#',
    },
    {
      source: 'PlugIn Voices',
      title:
        'PlugIn Voices Support for EVBuddy’s EVChargeShare™',
      desc:
        'Exciting news for EV Buddy! PlugIn has expressed strong support.',
      image: '/news/plugin.png',
      link: '#',
    },
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">Latest News & Press</h2>
        <p className="news-subtitle">
          Stay updated with EV Buddy’s latest innovations and partnerships.
        </p>

        <div className="news-carousel">
          {articles.map((item, index) => (
            <div className="news-card" key={index}>
              <div
                className="news-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="news-source">{item.source}</span>
              </div>

              <div className="news-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                <a href={item.link} className="news-btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="news-pagination">
          <button className="news-dot active" />
          <button className="news-dot" />
        </div>
      </div>
    </section>
  );
}

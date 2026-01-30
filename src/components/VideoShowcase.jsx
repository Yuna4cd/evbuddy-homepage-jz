// components/VideoShowcase.jsx
import './VideoShowcase.css';

export default function VideoShowcase() {
  const videos = [
    {
      title: 'Ford Mustang Mach-E',
      desc: 'Experience fast V2V DC charging with the Ford Mustang Mach-E.',
      thumbnail: '/videos/mach-e.jpg',
    },
    {
      title: 'Rivian R1S',
      desc: 'See how the Rivian R1S leverages our V2V charging technology.',
      thumbnail: '/videos/rivian.jpg',
    },
    {
      title: 'BrightDrop Van',
      desc: 'Commercial fleet charging made simple with BrightDrop.',
      thumbnail: '/videos/brightdrop.jpg',
    },
    {
      title: 'BMW EV',
      desc: 'Premium charging experience for BMW electric vehicles.',
      thumbnail: '/videos/bmw.jpg',
    },
  ];

  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-title">See EV Buddy in Action</h2>
        <p className="video-subtitle">
          Watch real-time, V2V DC fast charging in action and see how easy
          it is to get back on the road in minutes.
        </p>

        <div className="video-carousel">
          <button className="carousel-btn left">‹</button>

          <div className="video-track">
            {videos.map((video, index) => (
              <div className="video-card" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="play-btn">▶</div>
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn right">›</button>
        </div>
      </div>
    </section>
  );
}

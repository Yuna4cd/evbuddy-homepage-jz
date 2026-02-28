// components/VideoShowcase.jsx
import './VideoShowcase.css';

export default function VideoShowcase() {
  const videos = [
    {
      title: 'Ford Mustang Mach-E',
      desc: 'Experience fast V2V DC charging with the Ford Mustang Mach-E.',
      youtubeId: 'FftTmlqWY8E',
    },
    {
      title: 'Rivian R1S',
      desc: 'See how the Rivian R1S leverages our V2V charging technology.',
      youtubeId: 'k6jN05bGd-M',
    },
    {
      title: 'BrightDrop Van',
      desc: 'Commercial fleet charging made simple with BrightDrop.',
      youtubeId: '5yVLIUprufU',
    },
    {
      title: 'BMW EV',
      desc: 'Premium charging experience for BMW electric vehicles.',
      youtubeId: 'yDnGEg9jE9E',
    },
  ];

  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-title">See EVChargeShare in Action</h2>
        <p className="video-subtitle">
          Watch real-time, V2V DC fast charging in action and see how easy
          it is to get back on the road in minutes.
        </p>

        <div className="video-carousel">
          <div className="video-track">
            {videos.map((video, index) => (
              <div className="video-card" key={index}>
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

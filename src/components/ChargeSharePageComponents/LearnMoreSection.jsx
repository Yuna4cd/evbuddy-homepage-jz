import React, { useState } from "react";
import "./LearnMoreSection.css";

const videos = [
  {
    label: "Technical Deep Dive",
    src: "https://www.youtube.com/embed/VIDEO_ID_1"
  },
  {
    label: "Safety Architecture",
    src: "https://www.youtube.com/embed/VIDEO_ID_2"
  }
];

export default function LearnMoreSection() {
  const [current, setCurrent] = useState(videos[0]);

  return (
    <section className="learnmore-section">
      <h1 className="learnmore-title">Learn More</h1>

      <div className="learnmore-container">
        <div className="learnmore-left">
          <div className="video-wrapper">
            <iframe
              src={current.src}
              title={current.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="learnmore-right">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => setCurrent(video)}
              className={current.src === video.src ? "active" : ""}
            >
              {video.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

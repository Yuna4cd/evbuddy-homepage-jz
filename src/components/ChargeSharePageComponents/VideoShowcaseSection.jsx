import React, { useState } from "react";
import "./VideoShowcaseSection.css";

const videos = [
  { label: "Overview", src: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { label: "Demo", src: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { label: "Use Case", src: "https://www.youtube.com/embed/VIDEO_ID_3" },
  { label: "Technology", src: "https://www.youtube.com/embed/VIDEO_ID_4" },
];

export default function VideoShowcaseSection() {
  const [current, setCurrent] = useState(videos[0]);

  return (
    <section className="video-section">
      <h1>See EVChargeShare in Action</h1>

      <div className="video-container">
        <div className="video-left">
          <div className="video-wrapper">
            <iframe
              src={current.src}
              title={current.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="video-right">
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

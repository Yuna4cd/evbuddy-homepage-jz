import React, { useState } from "react";
import "./FlyerSection.css"

import flyer1 from "../../assets/flyer1.pdf"

const flyers = [
  { title: "Flyer Title 1", file: flyer1 },
  { title: "Flyer Title 2", file: flyer1 },
  { title: "Flyer Title 3", file: flyer1 },
];

export default function FlyerSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="flyer-section">
      {flyers.map((flyer, index) => (
        <div key={index} className="flyer-item">
          <div
            className="flyer-header"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <span>{flyer.title}</span>

            <div>
              <a
                href={flyer.file}
                download
                className="download-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Download
              </a>
              <span className="arrow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
          </div>

          {openIndex === index && (
            <div className="flyer-content">
              <iframe
                src={flyer.file}
                width="100%"
                height="600px"
                title={flyer.title}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

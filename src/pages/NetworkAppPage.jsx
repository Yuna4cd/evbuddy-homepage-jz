import React, { useEffect, useRef } from "react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";

import "./NetworkAppPage.css";

const features = [
  {
    id: 1,
    title: "Real-Time Matching",
    description:
      "Instantly connect with nearby EV buddies ready to share power when you need it most.",
    image: mobile1,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description:
      "Safe in-app wallet processing and verification ensure secure, reliable charging exchanges.",
    image: mobile2,
  },
  {
    id: 3,
    title: "Community Ratings",
    description:
      "Trust and review your charging experience to build a reliable network.",
    image: mobile3,
  },
  {
    id: 4,
    title: "Earn While You Share",
    description:
      "Turn your EV into a mobile charging station and earn money by helping other drivers.",
    image: mobile4,
  },
];

export default function NetworkAppPage() {


  return (
    <div className="network-page">
      <section className="hero-section">
        <h1>
          Join the <span>EV Buddy Network</span>
        </h1>
        <p>
          Our exclusive mobile application connects you to a decentralized
          network of mobile energy providers and makes EV charging accessible
          anywhere.
        </p>
        <button className="cta-btn">Learn More</button>
      </section>

      <section className="coverflow-section">
        <ul
          className="coverflow-container"
        >
          {features.map((feature) => (
            <li key={feature.id} className="coverflow-item">
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

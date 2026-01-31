import NewsCard from "./NewsCard";
import "./NewsGrid.css";

const newsData = [
  {
    title: "EV Buddy: NJ CSIT-Approved Exclusive EV-to-EV Charger",
    author: "Suresh Arya",
    date: "11/18/25",
    previewSrc: "https://example.com/doc1.pdf",
    description:
      "EV Buddy is NJ CSIT’s sole approved EV-to-EV charger, recognized for its innovation.",
  },
  {
    title:
      "EV Buddy Opens Waitlist for Mobile V2V DC Fast-Charging Service",
    author: "Beverly",
    date: "10/29/25",
    previewSrc: "https://example.com/doc2.pdf",
    description:
      "Drivers & Hosts earn delivering on-site V2V DC fast charging to now. Join EV Buddy’s EVChargeShare® waitlist.",
  },
  {
    title: "EV Buddy x EcoG: Next-Gen V2V Charging Partnership",
    author: "Beverly",
    date: "10/22/25",
    previewSrc: "https://example.com/doc3.pdf",
    description:
      "EV Buddy and EcoG sign strategic hardware agreement for advanced V2V charging solutions.",
  },
  {
    title:
      "PlugIn Voices Support for EVBuddy’s EVChargeShare™",
    author: "Gran, Neal, and Pote, Pralesh",
    date: "10/01/25",
    previewSrc: "https://example.com/doc4.pdf",
    description:
      "PlugIn has expressed strong support for EV Buddy’s patent-pending portable V2V DC fast charging solution.",
  },
];

function NewsGrid() {
  return (
    <section className="news-grid">
      {newsData.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </section>
  );
}

export default NewsGrid;

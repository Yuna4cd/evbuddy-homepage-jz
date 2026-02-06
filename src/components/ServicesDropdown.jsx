import { useState } from "react";
import ServiceNavLinks from "./ServiceNavLinks";
import "./ServicesDropdown.css"

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    // Only toggle on mobile
    if (window.innerWidth < 768) {
      setOpen(prev => !prev);
    }
  };

  return (
    <li className={`services-dropdown ${open ? "open" : ""}`}>
      <button
        className="services-btn dropdown-trigger"
        onClick={handleClick}
      >
        Services
      </button>

      <ServiceNavLinks />
    </li>
  );
}

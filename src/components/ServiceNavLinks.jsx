// ServiceNavLinks.jsx
import { NavLink } from "react-router-dom";

export default function ServiceNavLinks() {
  const links = [
    { label: "EV Charging", path: "/services/ev-charging" },
    { label: "Fleet Management", path: "/services/fleet" },
    { label: "Consulting", path: "/services/consulting" },
    { label: "Maintenance", path: "/services/maintenance" },
  ];

  return (
    <ul className="dropdown-menu">
      {links.map(link => (
        <li key={link.path}>
          <NavLink to={link.path}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  );
}

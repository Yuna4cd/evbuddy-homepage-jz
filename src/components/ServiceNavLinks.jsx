// ServiceNavLinks.jsx
import { NavLink } from "react-router-dom";

export default function ServiceNavLinks() {
  const links = [
    { label: "EVChargeShare", path: "/services/EVChargeShare" },
    { label: "EVNetworkApp", path: "/services/EVNetworkApp" },
    { label: "Installation", path: "/services/installation" },

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

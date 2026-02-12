import "./TeamSection.css";

const team = [
  {
    initials: "SA",
    name: "Suresh Arya",
    role: "Founder & CEO",
    description:
      "Electrical & computer engineer with extensive EV/clean-tech leadership experience.",
    education:
      "B.S. Electrical Engineering; M.S. Computer Engineering"
  },
  {
    initials: "HB",
    name: "Henry Behnke",
    role: "Chief Operating Officer (COO)",
    description:
      "International renewable energy executive with public-company board experience.",
    education:
      "B.S. Mechanical Engineering; EMBA, Rutgers University"
  },
  {
    initials: "MC",
    name: "Mike Cully",
    role: "Chief Development Officer (CDO)",
    description:
      "Business and marketing leader in e-mobility; former Regional Director at Daimler Mobility AG.",
    education:
      "MBA (Global Entrepreneurship); San Diego State University"
  },
  {
    initials: "KD",
    name: "Kishore Devisetti",
    role: "Sales",
    description:
      "EVSE sales and customer success leader with hands-on field experience.",
    education:
      "M.S., University of Tennessee"
  }
];

export default function TeamSection() {
  return (
    <section className="team">
      <h2 className="team-title">
        Experienced Leadership Team
      </h2>

      <div className="team-grid">
        {team.map(member => (
          <div key={member.name} className="team-card">
            <div className="team-avatar">
              {member.initials}
            </div>

            <h3 className="team-name">{member.name}</h3>

            <div className="team-role">{member.role}</div>

            <p className="team-description">
              {member.description}
            </p>

            <div className="team-education">
              {member.education}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

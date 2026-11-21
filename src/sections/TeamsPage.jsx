
import React, { useMemo, useState } from "react";
import "./TeamsPage.css";

const portraits = import.meta.glob("../assets/teams/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const upperHierarchy = [
  {
    name: "Abdul Rehman Qaimkhani",
    role: "President",
    image: "president without outline.png",
    intro:
      "Guiding the vision of SMEC’27 with leadership, thoughtful decisions, and a clear direction. Bringing people together to turn ambitious ideas into an unforgettable experience.",
  },
  {
    name: "Ali Anwer",
    role: "Vice President",
    image: "president with outline .png",
    intro:
      "Supporting the team at every step, keeping ideas moving, and turning plans into action. Helping drive the energy and execution behind this season of SMEC.",
  },
  {
    name: "Hammad Faisal",
    role: "General Secretary",
    image: "president without outline blur.png",
    intro:
      "Bringing structure to ideas through careful planning and coordination. Keeping teams aligned and ensuring every detail contributes to a smooth event experience.",
  },
  {
    name: "Agha Abdul Raafay",
    role: "Executive Secretary",
    image: "treasurer.png",
    intro:
      "Connecting planning with execution through focused coordination and organised workflows. Helping every part of the SMEC journey move forward seamlessly.",
  },
  {
    name: "Umar Danish",
    role: "Treasurer",
    image: "treasurer.png",
    intro:
      "Overseeing financial planning and keeping resources organised. Making sure the financial side of SMEC’27 supports the team's goals and smooth execution.",
  },
  {
    name: "Zayan Khan",
    role: "Brand Ambassador",
    image: "brand-ambassador.png",
    intro:
      "Representing the spirit of SMEC’27 and bringing its energy to the wider community. Helping build excitement and connect people with this season's experience.",
  },
];

const directors = [
  {
    name: "Muneeb Ahmed",
    role: "Chief Media Officer",
    image: "chief-media-officer.png",
    intro:
      "Leading the creative direction behind SMEC’27's visual presence. From capturing key moments to shaping the event's media identity, the focus is on telling the story of this season.",
  },
  {
    name: "Saifullah Khan",
    role: "Chief Liaison Manager",
    image: "chief-liaison-manager.png",
    intro:
      "Building clear communication between the organising team, guests, and participants. Helping coordination stay organised and ensuring everyone stays connected.",
  },
  {
    name: "Aliyan Uddin",
    role: "Chief Corporate Manager",
    image: "chief-corporate-manager.png",
    intro:
      "Driving corporate outreach and building meaningful professional connections. Working to bring organisations, sponsors, and industry partners closer to SMEC’27.",
  },
  {
    name: "Irteza Khan",
    role: "Strategic Mentor",
    image: "strategic-mentor.png",
    intro:
      "Bringing strategic direction to the competitive side of SMEC’27. Supporting the planning of challenges across technical competitions, e-games, and general games.",
  },
  {
    name: "Sabih Shamsi",
    role: "Director Management",
    image: "director-management.png",
    intro:
      "Strengthening the operational side of the event through organisation, coordination, and on-ground planning. Helping every activity run in a disciplined and structured way.",
  },
  {
    name: "Muhammad Ubaid",
    role: "Director Sales",
    image: "director-sales.png",
    intro:
      "Contributing to the outreach and execution side of SMEC’27. Supporting the work that connects participants with the event and helps bring its plans to life.",
  },
];

const allMembers = [
  ...upperHierarchy.map((member) => ({
    ...member,
    category: "Upper Hierarchy",
  })),
  ...directors.map((member) => ({
    ...member,
    category: "Directors",
  })),
];

export default function TeamsPage() {
  const [category, setCategory] = useState("All");
  const [role, setRole] = useState("All");
  const [search, setSearch] = useState("");

  const availableRoles = useMemo(() => {
    return allMembers
      .filter((member) =>
        category === "All" || member.category === category
      )
      .map((member) => member.role);
  }, [category]);

  const filteredMembers = allMembers.filter((member) => {
    const matchesCategory =
      category === "All" || member.category === category;

    const matchesRole =
      role === "All" || member.role === role;

    const searchTerm = search.trim().toLowerCase();

    const matchesSearch =
      !searchTerm ||
      member.name.toLowerCase().includes(searchTerm) ||
      member.role.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesRole && matchesSearch;
  });

  const visibleUpper = filteredMembers.filter(
    (member) => member.category === "Upper Hierarchy"
  );

  const visibleDirectors = filteredMembers.filter(
    (member) => member.category === "Directors"
  );

  function handleCategoryChange(value) {
    setCategory(value);
    setRole("All");
  }

  function renderMember(member, index) {
    const imagePath = `../assets/teams/${member.image}`;
    const imageUrl = portraits[imagePath];

    return (
      <article
        className="team-member"
        key={`${member.category}-${member.name}`}
        style={{ "--member-index": index }}
      >
        <div className="member-portrait">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${member.name}, ${member.role}`}

            />
          ) : (
            <div className="portrait-placeholder">
              {member.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
        </div>

        <div className="member-content">
          <span className="member-role">{member.role}</span>
          <h3>{member.name}</h3>
          <p>{member.intro}</p>
        </div>
      </article>
    );
  }

  return (
    <main className="teams-page">
      <section className="teams-hero">
        <span className="teams-eyebrow">SMEC ’27 · THE PEOPLE</span>
        <h1>
          MEET THE <span>TEAM.</span>
        </h1>
        <p>
          The people, ideas, and leadership bringing Speed, Mind,
          Execution, and Competition to life.
        </p>
      </section>

      <section className="team-directory">
        <div className="team-filters">
          <div className="filter-field category-field">
            <label htmlFor="team-category">Main Category</label>
            <select
              id="team-category"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Upper Hierarchy">Upper Hierarchy</option>
              <option value="Directors">Directors</option>
            </select>
          </div>

          <div className="filter-field role-field">
            <label htmlFor="team-role">Role</label>
            <select
              id="team-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="All">All Roles</option>
              {availableRoles.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-field search-field">
            <label htmlFor="team-search">Find a person</label>
            <div className="team-search-box">
              <span aria-hidden="true">⌕</span>
              <input
                id="team-search"
                type="search"
                placeholder="Search by name or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="directory-count">
          <span>{filteredMembers.length} MEMBERS</span>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setRole("All");
              setSearch("");
            }}
          >
            Reset filters ↗
          </button>
        </div>

        {visibleUpper.length > 0 && (
          <section className="team-section">
            <div className="team-section-heading">
              <span>01 / LEADERSHIP</span>
              <h2>Upper Hierarchy<span>.</span></h2>
              <p>The leadership guiding the vision and direction of SMEC’27.</p>
            </div>

            <div className="team-list">
              {visibleUpper.map(renderMember)}
            </div>
          </section>
        )}

        {visibleDirectors.length > 0 && (
          <section className="team-section directors-section">
            <div className="team-section-heading">
              <span>02 / DIRECTORATE</span>
              <h2>Meet the Directors<span>.</span></h2>
              <p>The people leading teams, departments, and execution.</p>
            </div>

            <div className="team-list">
              {visibleDirectors.map(renderMember)}
            </div>
          </section>
        )}

        {filteredMembers.length === 0 && (
          <div className="no-team-results">
            <span>NO MATCH FOUND</span>
            <h3>No team member found.</h3>
            <p>Try another name or select a different role.</p>
            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setRole("All");
                setSearch("");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

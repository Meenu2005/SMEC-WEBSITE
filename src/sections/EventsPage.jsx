
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, fee } from "./eventsData";
import "../App.css";

// Temporary online images.
// Later, we can download these and keep them inside src/assets.
const eventImages = {
  fifa: "https://pbs.twimg.com/media/HCuwFbXaUAElra2.jpg",
  coding: "https://iba.edu.pk/News/images/iba-smcs-hosts-computer-science-students-leading-universities-icpc-pakistan-regional-contest-banner2.jpg",
  chess: "https://www.ofs.edu.sg/news/2022/09-03-63rd-national-school-chess-championship/photos/001.jpg",
  futsal: "https://cgs.cgitapps.com/storage/661/01KKTPR8XNJQP3XDNK90TR1A8X.JPG",
  esports: "https://rbleipzig.com/_next/image?q=100&url=https%3A%2F%2Fimg.rbleipzig.com%2Ff_auto%2Cc_limit%2Cw_2000%2Ch_2000%2Flive%2F74b00ff527b3e9d25a1d40cc8adcf6d6f0b400b7%2F20260126_fcpro26_open_london_konkolmichal-0084.jpg&w=3840"
};

function getEventImage(name, categoryId) {
  const event = name.toLowerCase();

  if (event.includes("fifa")) return eventImages.fifa;
  if (event.includes("chess")) return eventImages.chess;
  if (event.includes("futsal")) return eventImages.futsal;

  if (
    event.includes("code") ||
    event.includes("programming") ||
    event.includes("debugging") ||
    event.includes("database") ||
    event.includes("hackathon") ||
    event.includes("network") ||
    event.includes("web development") ||
    event.includes("mobile app")
  ) {
    return eventImages.coding;
  }

  if (categoryId === "e-games") return eventImages.esports;
  if (categoryId === "geeks") return eventImages.coding;

  return eventImages.futsal;
}

function EventCard({ event, category, index }) {
  const [name, price] = event;

  return (
    <article
      className="showcase-card"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(3,15,34,.97) 0%, rgba(3,15,34,.78) 43%, rgba(3,15,34,.25) 100%),
          url("${getEventImage(name, category.id)}")
        `
      }}
    >
      <div className="showcase-card__main">
        <span className="showcase-card__eyebrow">
          {category.title} / EVENT {String(index + 1).padStart(2, "0")}
        </span>

        <h2>{name}</h2>

        <p>
          Get ready to compete, challenge yourself and showcase your skills
          at SMEC.
        </p>

        <span className="showcase-card__tag">
          SMEC '27 · {category.title}
        </span>
      </div>

      <aside className="showcase-card__info">
        <div className="showcase-card__info-heading">
          EVENT INFORMATION
        </div>

        <div className="showcase-card__detail">
          <span>ENTRY FEE</span>
          <strong>{fee(price)}</strong>
        </div>

        <div className="showcase-card__detail">
          <span>EVENT DATE</span>
          <strong>To be announced</strong>
        </div>

        <div className="showcase-card__detail">
          <span>ROOM / VENUE</span>
          <strong>To be announced</strong>
        </div>

        <div className="showcase-card__status">
          <span className="status-dot" />
          Details coming soon
        </div>
      </aside>
    </article>
  );
}

export default function EventsPage() {
  const [params, setParams] = useSearchParams();

  const chosen = categories.some(
    c => c.id === params.get("category")
  )
    ? params.get("category")
    : "e-games";

  const active = categories.find(c => c.id === chosen);

  const [selectedEvent, setSelectedEvent] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(true);

  function selectCategory(category) {
    setParams({ category: category.id });
    setSelectedEvent("all");
    setDropdownOpen(true);
  }

  const visibleEvents =
    selectedEvent === "all"
      ? active.events
      : active.events.filter(([name]) => name === selectedEvent);

  return (
    <main className="events-page">

      <section className="event-explorer">

        <div className="explorer-heading">
          <span className="explorer-kicker">SMEC '27 · COMPETITION DIRECTORY</span>
          <h1>CHOOSE YOUR <em>ARENA.</em></h1>
          <p>
            Explore the competitions, discover your challenge
            and get ready to compete.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-trigger ${chosen === category.id ? "is-active" : ""
                }`}
              onClick={() => {
                if (chosen === category.id) {
                  setDropdownOpen(!dropdownOpen);
                } else {
                  selectCategory(category);
                }
              }}
            >
              <span>{category.title}</span>
              <small>{String(category.count).padStart(2, "0")}</small>
              <span className="category-chevron">
                {chosen === category.id && dropdownOpen ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>

        {/* EVENT FILTER */}
        {dropdownOpen && (
          <div className="event-filter">
            <button
              className={`event-filter__item ${selectedEvent === "all" ? "is-selected" : ""
                }`}
              onClick={() => setSelectedEvent("all")}
            >
              All Events
            </button>

            {active.events.map(([name]) => (
              <button
                key={name}
                className={`event-filter__item ${selectedEvent === name ? "is-selected" : ""
                  }`}
                onClick={() => setSelectedEvent(name)}
              >
                {name}
              </button>
            ))}
          </div>
        )}

        {/* EVENT SHOWCASE */}
        <div className="showcase-heading">
          <div>
            <span className="explorer-kicker">NOW EXPLORING</span>
            <h2>
              {selectedEvent === "all" ? active.title : selectedEvent}
            </h2>
          </div>

          <span className="showcase-count">
            {visibleEvents.length} EVENTS
          </span>
        </div>

        <div className={`showcase-grid ${selectedEvent !== "all" ? "single-event" : ""
          }`}>
          {visibleEvents.map((event, index) => (
            <EventCard
              key={event[0]}
              event={event}
              category={active}
              index={active.events.findIndex(
                item => item[0] === event[0]
              )}
            />
          ))}
        </div>

      </section>
    </main>
  );
}

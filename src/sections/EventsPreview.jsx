import { Link } from "react-router-dom";
import { categories } from "./eventsData";
import "../App.css";
import egamesIcon from "../assets/joystick.png";
import geeksIcon from "../assets/hipster.png";
import generalIcon from "../assets/basketball.png";

const symbols = {
  "e-games": egamesIcon,
  geeks: geeksIcon,
  "general-games": generalIcon,
};

export default function EventsPreview() {
  return <section className="events-section" id="events">
    <div className="events-section__top">
      <div>
        <p className="section-kicker"><span /> THE COMPETITION <span /></p>
        <h2>CHOOSE YOUR <em>ARENA.</em></h2>
        <p className="events-intro">Three arenas. 36 competitions. One place to prove what you can do.</p>
      </div>
      <Link className="events-all-link" to="/events">Explore all events <b>↗</b></Link>
    </div>
    <div className="category-grid">
      {categories.map((c, i) => <Link className={`category-card category-card--${c.id}`} to={`/events?category=${c.id}`} key={c.id}>
        <div className="category-art" aria-hidden="true">
          <span className="art-grid" /><span className="art-orbit" /><span className="art-orbit art-orbit--two" />
          <span className="art-symbol"><img
            src={symbols[c.id]}
            alt={`${c.name} icon`}
            className="category-icon"
          /></span><small>SMEC ’26 · ARENA 0{i + 1}</small>
        </div>
        <div className="category-card__body">
          <div className="category-card__meta"><span>CATEGORY 0{i + 1}</span><span>{String(c.count).padStart(2, "0")} EVENTS</span></div>
          <h3>{c.title}</h3><p className="category-card__tagline">{c.tagline}</p>
          <p className="category-card__description">{c.description}</p>
          <span className="category-card__cta">Explore category <b>↗</b></span>
        </div>
      </Link>)}
    </div>
    <div className="events-section__foot">01 — 03 <span /> FIND YOUR COMPETITION</div>
  </section>;
}

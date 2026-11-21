
import { Link } from "react-router-dom";
import "./TeamPreview.css";

import team1 from "../assets/teamsbg/image1.png";
import team2 from "../assets/teamsbg/image2.png";
import team3 from "../assets/teamsbg/image3.png";
import team4 from "../assets/teamsbg/image4.png";
import team5 from "../assets/teamsbg/image5.png";

const teamImages = [team1, team2, team3, team4, team5];

export default function TeamPreview() {
  return (
    <section className="team-preview">
      <div className="team-preview__collage">
        {teamImages.map((image, index) => (
          <div
            className={`team-preview__photo photo-${index + 1}`}
            key={image}
          >
            <img src={image} alt="SMEC team moments" />
          </div>
        ))}
      </div>

      <div className="team-preview__overlay" />

      <div className="team-preview__content">
        <span className="team-preview__eyebrow">
          THE PEOPLE BEHIND SMEC
        </span>

        <h2>
          Meet the <span>Team.</span>
        </h2>

        <p>
          Different minds, one vision.
          Meet the people who make every SMEC moment happen.
        </p>

        <Link to="/teams" className="button button-gold">
          Meet Our Team <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

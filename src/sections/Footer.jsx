
import { Link } from "react-router-dom";
import smecLogo from "../assets/smeclogo.png";
import cacLogo from "../assets/caclogo.png";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="smec-footer">

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={smecLogo} alt="SMEC Logo" />
            <span>SMEC<span className="footer-year">'27</span></span>
          </Link>

          <p>
            Speed. Mind. Execution. Competition.
            <br />
            A platform for innovation, talent and competition.
          </p>

          <span className="footer-coming-soon">
            <span className="coming-dot"></span>
            SMEC '27 · COMING SOON
          </span>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/teams">Our Team</Link>
        </div>

        {/* SOCIAL LINKS */}
        <div className="footer-column footer-social">
          <h3>Connect With Us</h3>

          <a
            href="https://www.instagram.com/ssuet_smec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/company/docsit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>

          <a
            href="https://www.facebook.com/ssuet.smec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook <span>↗</span>
          </a>
        </div>

        {/* COMING SOON */}
        <div className="footer-message">
          <span className="footer-kicker">THE COUNTDOWN BEGINS</span>
          <h2>Something<br />Big Is Coming.</h2>
          <p>
            Stay connected. The next chapter of SMEC is on its way.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <div className="footer-copyright">
          © {currentYear} SMEC '27. All rights reserved.
        </div>

        <div className="footer-organized">
          <span>Organized by</span>
          <img src={cacLogo} alt="CAC Logo" />
          <strong>DOCS&IT</strong>
        </div>

        <a href="#top" className="footer-back-top">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

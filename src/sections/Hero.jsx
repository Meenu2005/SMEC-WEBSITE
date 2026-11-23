import "../App.css";
import logo from "../assets/smeclogo.png";

function SmecEmblem() {
  return (
    <img
      className="smec-emblem"
      src={logo}
      alt="SMEC sword emblem"
    />);
}

export default function Hero() {
  return (
    <main className="smec-page">
      <section className="smec-hero" id="home">
        <div className="hero-building" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-geometry geometry-left" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="hero-geometry geometry-right" aria-hidden="true">
          <span /><span /><span />
        </div>
        <div className="hero-gold-line line-one" aria-hidden="true" />
        <div className="hero-gold-line line-two" aria-hidden="true" />



        <div className="hero-copy">
          <p className="eyebrow"><strong>SSUET</strong><i /> Department of Computer Science</p>
          <h1>SMEC<span>’27</span></h1>
          <p className="tagline">SPEED <b>|</b> MIND <b>|</b> EXECUTION <b>|</b> COMPETITION</p>
          <p className="hero-description">
            The ultimate tech and talent showdown,<br className="desktop-break" />
            bringing together brilliant minds, creative teams<br className="desktop-break" />
            and innovative ideas under one roof.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#events">Explore SMEC <span>↗</span></a>
            <a className="button button-outline" href="#intro"><span className="play">▶</span> Watch Intro</a>
          </div>
        </div>

        <div className="emblem-stage" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="emblem-halo" />
          <SmecEmblem />
        </div>

        <a className="scroll-cue" href="#events">
          <span className="mouse"><i /></span>
          <div>Scroll Down</div>
          <i className="scroll-line" />
        </a>
        <div className="hero-bottom-cut" aria-hidden="true" />
      </section>


    </main>
  );
}

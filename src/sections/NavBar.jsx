import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/smeclogo.png'

const navItems = [
  { name: "Home", path: "/", end: true },
  { name: "Events", path: "/events" },
  { name: "Teams", path: "/teams" },

  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
]

function SmecEmblem() {
  return (
    <img
      className="smec-emblem"
      src={logo}
      alt="SMEC sword emblem"
    />
  )
}

export default function NavBar() {
  return (
    <header className="smec-nav">

      <Link className="brand" to="/" aria-label="SMEC 27 home">
        <span className="brand-mark">
          <SmecEmblem />
        </span>
        <span>
          SMEC<span className="brand-year">’27</span>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            end={item.end}
            key={item.name}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-register" to="/#register">
        Register <span aria-hidden="true">↗</span>
      </Link>

    </header>
  )
}
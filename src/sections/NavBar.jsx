import React, { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`smec-nav${menuOpen ? " menu-open" : ""}`}>

      <Link className="brand" to="/" aria-label="SMEC 27 home">
        <span className="brand-mark">
          <SmecEmblem />
        </span>
        <span>
          SMEC<span className="brand-year">’27</span>
        </span>
      </Link>

      <button
        className="nav-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="smec-primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>

      <nav id="smec-primary-navigation" className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            end={item.end}
            key={item.name}
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-register" to="/#register" onClick={closeMenu}>
        Register <span aria-hidden="true">↗</span>
      </Link>

    </header>
  )
}
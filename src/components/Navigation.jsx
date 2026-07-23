import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const links = [
  { to: "#home", label: "Hem" },
  { to: "#about", label: "Om" },
  { to: "#services", label: "Tjänster" },
  { to: "#career", label: "Karriär" },
  { to: "#contact", label: "Kontakt" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav className={`nav ${showNav ? "show" : ""} ${isOpen ? "menu-open" : ""}`}>      <div className="nav-container">

        <button
          className={`nav-toggle ${isOpen ? "is-active" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <a href={to} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navigation;
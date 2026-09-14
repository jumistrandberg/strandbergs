import { useState, useEffect } from "react";
import "../styles/navigation.css";

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
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Show background/navigation styling after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`nav ${showNav ? "show" : ""} ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <div className="nav-container">
        <h1>Strandbergs</h1>

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
          {links.map(({ to, label }) => {
            const sectionId = to.substring(1);

            return (
              <li key={to}>
                <a
                  href={to}
                  onClick={closeMenu}
                  className={
                    activeSection === sectionId ? "active" : ""
                  }
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
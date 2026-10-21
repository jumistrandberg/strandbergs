import "../styles/footer.css";

const navLinks = [
  { label: "Hem", id: "home" },
  { label: "Om", id: "about" },
  { label: "Tjänster", id: "services-section" },
  { label: "Karriär", id: "career" },
  { label: "Kontakt", id: "contact-end" },
];

const scrollToId = (e, id) => {
  const el = document.getElementById(id);

  if (!el) return;

  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              STRANDBERGS
            </a>
            <p>Där personlig blir personligt.</p>
          </div>

          <a href="#home" className="footer-to-top" onClick={scrollToTop}>
            Till toppen <span aria-hidden="true">↑</span>
          </a>
        </div>

        <nav className="footer-nav" aria-label="Sidfot">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => (id === "home" ? scrollToTop(e) : scrollToId(e, id))}
            >
              {label}
            </a>
          ))}
        </nav>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 Strandbergs</p>
          <p>Personlig assistans i hela Sverige · Sedan 2011</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import "../styles/hero.css";

const HeroComponent = () => {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="noise-background"></div>

      {/* ---------------- BLOBS ---------------- */}
      {/* <BlobComponent /> */}

      {/* ---------------- CONTENT ---------------- */}
      <div className="hero-content">
        <p className="hero-description">
          Funktionsrätt, inkludering, trygghet och acceptans, det är
        </p>
        <h1>Strandbergs</h1>
        <p className="hero-heading">personlig assistans</p>
        <p className="subtitle">
          Assistansbolaget med det lilla extra sedan 2011
        </p>

        <div className="hero-btn-section">
          <button className="hero-button" onClick={handleScrollToAbout}>
            Jag vill veta mer!
          </button>
          <button className="btn-secondary" onClick={handleScrollToAbout}>
            Har jag rätt till personlig assistans?
          </button>
        </div>
      </div>

      {/* ---------------- SCROLL INDICATOR ---------------- */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroComponent;

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
        <h1>Strandbergs</h1>
        <p className="subtitle">vi kan</p>
        <p className="hero-heading">personlig assistans</p>
        <p className="hero-description">
          Som assistansbolaget med det lilla extra sätter Strandbergs
          "personlig" i personlig assistans, sedan 2011.
        </p>
        <button className="hero-button" onClick={handleScrollToAbout}>
          Jag vill veta mer!
        </button>
        <button className="btn-secondary" onClick={handleScrollToAbout}>
          Har jag rätt till personlig assistans?
        </button>
      </div>

      {/* ---------------- SCROLL INDICATOR ---------------- */}
      <div className="scroll-indicator">
        <p className="scroll-text">scrolla</p>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroComponent;

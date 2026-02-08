// import BlobComponent from "./BlobComponent";
import "./Hero-styles.css"

const HeroComponent = () => {
  const handleScrollToAbout = () => {
    document.getElementById("om-oss")?.scrollIntoView({ behavior: "smooth" });
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
        <button className="hero-button" onClick={handleScrollToAbout}>
          Om oss
        </button>
      </div>

      {/* ---------------- SCROLL INDICATOR ---------------- */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroComponent;

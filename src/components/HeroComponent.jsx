// import BlobComponent from "./BlobComponent";

const HeroComponent = () => {
  const handleScrollToAbout = () => {
    document.getElementById("om-oss")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="noise-background"></div>

      {/* ---------------- BLOBS (can wrap multiple sections) ---------------- */}
      {/* <BlobComponent /> */}

      {/* ---------------- CONTENT ---------------- */}
      <div className="hero-content">
        <h1>Strandbergs</h1>
        <p className="subtitle">vi kan</p>
        <p className="hero-text">personlig assistans</p>
        <button onClick={handleScrollToAbout}>Om oss</button>
      </div>
    </section>
  );
};

export default HeroComponent;
import "../styles/about.css";
import "../App.css";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { ArrowIcon, HeartIcon, TargetIcon } from "./Icons";

const scrollToContact = () => {
  document.getElementById("contact-end")?.scrollIntoView({ behavior: "smooth" });
};

const AboutSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      className={`about-section fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <div className="about-intro">
        <div>
          <div className="about-into-section">
            <div className="about-info-container">
              <div>
                <p className="subtitle">Vår vision</p>
                <h2 className="about-heading">
                  Du är <span className="accent-color">unik</span>. <br /> Det
                  ska din <span className="accent-color">assistans</span> också
                  vara.
                </h2>
              </div>

              <div className="about-info-sub-container">
                <p>
                  Vi på Strandbergs finns här för dig som vill leva livet på
                  dina egna villkor. Vi erbjuder personlig assistans till
                  barn, ungdomar och vuxna i hela Sverige. Vi tror på
                  möjligheter, inte begränsningar. Vi vet att ingen människa
                  kan passa in i en mall och därför formar vi personliga
                  lösningar efter ditt liv. Du vet vad som är bäst för dig och
                  vi ser till att det blir verklighet.
                </p>
                <button
                  type="button"
                  className="btn-secondary about-btn"
                  onClick={scrollToContact}
                >
                  Låt oss prata möjligheter
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div className="about-icons-container">
            <div className="about-icons">
              <HeartIcon size={32} />
              <div>
                <h6>Människan först</h6>
                <p>Dina behov är alltid i centrum</p>
              </div>
            </div>

            <div className="about-icons">
              <TargetIcon size={32} />
              <div>
                <h6>Rätt matchning</h6>
                <p>Rätt team för just dig.</p>
              </div>
            </div>

            <div className="about-icons">
              <ArrowIcon size={32} />
              <div>
                <h6>Alltid där</h6>
                <p>Trygghet och stöd genom hela livet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
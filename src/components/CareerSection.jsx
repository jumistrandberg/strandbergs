import { ArrowIcon } from "./Icons";
import "../styles/career.css";

const scrollToContact = () => {
  document.getElementById("contact-end")?.scrollIntoView({ behavior: "smooth" });
};

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-container">
        <div className="career-sub-container career-sub-container-text">
          <p className="subtitle">Gör skillnad med oss</p>
          <h2>Redo att kliva in i en roll som förändrar liv?</h2>
        </div>
        <div className="career-sub-container">
          <h5>Personlig assistans börjar med dig.</h5>
          <p>
            Som personlig assistent är du en viktig del av en annan människas
            vardag. Du ger stöd utan att ta över och skapar utrymme för
            personens egna val. Vi söker dig som är lyhörd, engagerad och
            tycker om att arbeta nära människor. Hos Strandbergs bygger vi
            team där både du och personen du stöttar ska trivas.
          </p>
          <button
            type="button"
            className="btn-secondary about-btn"
            onClick={scrollToContact}
          >
            Berätta om dig själv
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
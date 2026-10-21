import { ArrowIcon, HeartIcon, TargetIcon } from "./Icons";
import "../styles/whistle.css";

const Whistleblower = () => {
  return (
    <>
      <div className="whistle-container">
        <p className="subtitle">visselblåsarfunktion</p>
        <h2>
          Välkommen till vår{" "}
          <span className="accent-color"> rapporteringskanal</span>.
        </h2>
        <p>
          Vår interna rapporteringskanal, så kallad visselblåsarfunktion, kan du
          använda för att rapportera misstankar om oegentligheter i vår
          organisation. Visselblåsarfunktionen syftar till att förbättra
          möjligheten att avslöja olika former av missförhållanden och till att
          ge ett utökat skydd för den som rapporterar.
        </p>

        <div className="whistle-sub-container">
          <h5>Det här gäller för dig som rapporterar</h5>
          <div className="whistle-card">
            <TargetIcon size={40} />
            <div>
              <p className="whistle-heading">Konfidentiellt</p>
              <p>
                Vi garanterar att ditt ärende samt din identitet behandlas
                konfidentiellt.
              </p>
            </div>
          </div>
          <div className="whistle-card">
            <HeartIcon size={40} />
            <div>
              <p className="whistle-heading">Skydd mot repressalier</p>
              <p>
                Du har också ett skydd mot repressalier när du hör av dig till
                kanalen.
              </p>
            </div>
          </div>
          <a
            className="whistle-btn"
            href="https://strandbergsassistans.whistlelink.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Till rapporteringskanalen
            <ArrowIcon />
          </a>
          <p className="smaller-subtitle">
            Kanalen öppnas i ett nytt fönster och hanteras av vår leverantör av
            rapporteringskanaler.
          </p>
        </div>
      </div>
    </>
  );
};

export default Whistleblower;

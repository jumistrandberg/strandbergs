import "../styles/about.css";
import "../App.css";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const AboutSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <>
      <section
        id="about-section"
        className={`about-section fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={ref}
      >
        <div className="about-intro">
          <div>
            <p className="subtitle">Vår vision</p>
            <h2 className="about-heading">Om oss</h2>
            <p>
              Det finns idag ingen anledning att acceptera sämre livskvalitet på
              grund av en funktionsnedsättning. Strandbergs-Assistans finns för
              dig som vill ha en flexibel, trygg och personlig lösning på dina
              villkor. Vi erbjuder personlig assistans till barn, ungdomar och
              vuxna i hela Sverige. Vi tror på möjligheter, inte begränsningar,
              och vi vet hur avgörande ett fungerande team och delaktighet i
              besluten är för din vardag. Du vet vad som är bäst för dig vi ser
              till att det blir verklighet.
            </p>
            <br />
            <button className="btn-secondary">
              Boka ett kostnadsfritt samtal
            </button>
          </div>

          <div>
            <h4 className="method-title">
              Strandbergs<span className="accent-color">metoden</span>
            </h4>
            <p>
              Vi på Strandbergs sätter "personlig" i personlig assistans. Vårt
              arbetssätt bygger på det vi kallar Strandbergsmetoden. Ett sätt
              att arbeta som utgår ifrån dig, dina behov och din rätt att vara
              delaktig i varje beslut som rör din assistans. Metoden handlar om
              att bygga ett team runt dig som faktiskt fungerar i praktiken,
              inte bara på papper.
            </p>
            <div className="method-container">
              <div className="method-block">
                <h5>Människan först</h5>
                <p className="smaller-text">
                  Vi sätter alltid individen i centrum och anpassar vårt stöd
                  efter varje persons unika behov och önskemål.
                </p>
              </div>
              <div className="method-block">
                <h5>Rätt matchning</h5>
                <p className="smaller-text">
                  Vi matchar våra assistenter med kunder baserat på
                  personlighet, intressen och behov.
                </p>
              </div>
              <div className="method-block">
                <h5>Kontinuerlig utveckling</h5>
                <p className="smaller-text">
                  Våra assistenter får regelbunden utbildning för att alltid
                  kunna ge bästa möjliga stöd.
                </p>
              </div>
              <div className="method-block">
                <h5>Trygghet & kvalitet</h5>
                <p className="smaller-text">
                  Vi arbetar systematiskt med kvalitetssäkring och fortbildning
                  för att leverera bästa möjliga assistans.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right-to-assistance">
          <h2>Har du rätt till assistans?</h2>
          <p>
            Rätten till personlig assistans regleras i Lagen om stöd och service
            till vissa funktionshindrade (LSS) samt i Socialförsäkringsbalkens
            51:a kapitel. Kommunen och/eller Försäkringskassan gör en bedömning
            utifrån dina grundläggande behov.
          </p>
          <ul>
            <li>Du måste ansöka innan du fyller 66 år</li>
            <li>
              Du behåller din assistans efter 66, men kan inte få fler timmar
            </li>
            <li>
              Bedömningen utgår från grundläggande behov – t.ex. personlig
              hygien, andning, måltider, kommunikation och att klä på/av dig
            </li>
          </ul>
          <br />
          <h4>De tre personkretsarna</h4>
          <p>
            Rätten till assistans avgörs även av vilken personkrets du tillhör:
          </p>
          <ol className="krets-container">
            <li>
              <span className="bolder">Personkrets 1: </span>
              <br /> Personer med intellektuell funktionsnedsättning, autism
              eller autismliknande tillstånd.
            </li>
            <li>
              <span className="bolder">Personkrets 2: </span> <br /> Personer
              som har fått en betydande och varaktig kognitiv
              funktionsnedsättning efter en hjärnskada i vuxen ålder,
            </li>
            <li>
              <span className="bolder">Personkrets 3: </span>
              <br /> Personer med andra stora och varaktiga fysiska eller
              psykiska funktionsnedsättningar med omfattande hehov av stöd.
            </li>
          </ol>
          <p>
            Osäker på om du har rätt till assistans? Det är vanligt – och du
            behöver inte ta reda på det själv. Vi hjälper dig att reda ut vad
            som gäller och hur du ansöker eller byter anordnare.
          </p>
          <p className="subtitle">
            Vill du ansöka om personlig assistans eller funderar du på att byta
            anordnare?
          </p>
          <button className="btn-secondary">Få hjälp med din ansökan</button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

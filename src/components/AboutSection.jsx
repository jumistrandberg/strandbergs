import "../styles/about.css";

const AboutSection = () => {
  return (
    <>
      <section id="about-section" className="about-section">
        <div className="about-intro">
          <p>
            Det finns idag ingen anledning att acceptera sämre livskvalitet på
            grund av en funktionsnedsättning. Strandbergs-Assistans finns för
            dig som vill ha en flexibel, trygg och personlig lösning – på dina
            villkor. Vi erbjuder personlig assistans till barn, ungdomar och
            vuxna i hela Sverige. Vi tror på möjligheter, inte begränsningar,
            och vi vet hur avgörande ett fungerande team och delaktighet i
            besluten är för din vardag. Du vet vad som är bäst för dig – vi ser
            till att det blir verklighet.
          </p>
          <p>
            Vårt arbetssätt bygger på det vi kallar Strandbergsmetoden – ett
            sätt att arbeta som utgår ifrån dig, dina behov och din rätt att
            vara delaktig i varje beslut som rör din assistans. Metoden handlar
            om att bygga ett team runt dig som faktiskt fungerar i praktiken,
            inte bara på papper.
          </p>
          <button>Boka ett kostnadsfritt samtal</button>
          <button>Se om du har rätt till assistans</button>
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
          <h3>De tre personkretsarna</h3>
          <p>
            Rätten till assistans avgörs även av vilken personkrets du tillhör:
          </p>
          <ol>
            <li>
              Personkrets 1: Barn och ungdomar med omfattande
              funktionsnedsättning
            </li>
            <li>Personkrets 2: Vuxna med omfattande funktionsnedsättning</li>
            <li>
              Personkrets 3: Personer med varaktiga funktionsnedsättningar
            </li>
          </ol>
          <p>
            Osäker på om du har rätt till assistans? Det är vanligt – och du
            behöver inte ta reda på det själv. Vi hjälper dig att reda ut vad
            som gäller och hur du ansöker eller byter anordnare.
          </p>
          <button>Få hjälp med din ansökan</button>
          <button>Funderar du på att byta anordnare?</button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

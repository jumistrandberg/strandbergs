import "../styles/dataskydd.css";

const Dataskydd = () => {
  return (
    <section className="dataskydd-section">
      <div className="dataskydd-container">
        <p className="subtitle">dataskyddspolicy</p>
        <h2>
          Dina personuppgifter är <span className="accent-color">trygga</span>{" "}
          med oss.
        </h2>
        <p>
          Vi på Strandbergs assistans vill att du ska känna dig trygg när du
          lämnar dina personuppgifter till oss. Vi värnar om din personliga
          integritet och eftersträvar alltid en hög nivå av dataskydd.
        </p>

        <hr />

        <div className="dataskydd-block">
          <h5>Så här behandlar vi personuppgifter</h5>
          <p>
            Strandbergs assistans behandlar personuppgifter i syfte att
            administrera vårt kundförhållande till dig. De personuppgifter vi
            behandlar har antingen lämnats av dig, inhämtas från publika
            databaser eller från någon av våra samarbetspartners. Vi sparar
            aldrig personuppgifter längre än vi behöver. Vissa personuppgifter
            slängs direkt, andra sparas olika lång tid beroende på vad
            uppgifterna ska användas till och våra skyldigheter enligt lag.
            Vidare kan vi komma att behandla vissa personuppgifter för att
            tillgodose säkerheten i våra tjänster och för att uppfylla våra
            lagstadgade skyldigheter gentemot myndigheter.
          </p>
        </div>

        <div className="dataskydd-block">
          <h5>Dina rättigheter</h5>
          <p>
            Dataskyddslagstiftningen ger dig ett antal rättigheter i förhållande
            till behandlingen av dina personuppgifter. Du har till exempel rätt
            att begära tillgång till dina personuppgifter (ett så kallat
            registerutdrag) och till dataportabilitet. Du har även rätt att
            begära att dina uppgifter rättas eller raderas, att behandlingen
            begränsas, att eventuella samtycken återkallas och att dina
            uppgifter inte ska användas för direktmarknadsföring.
          </p>
        </div>

        <div className="dataskydd-block">
          <h5>Klagomål</h5>
          <p>
            Om du anser att dina personuppgifter behandlas i strid med gällande
            regelverk bör du anmäla det till oss snarast. Du når oss via{" "}
            <a href="#contact-end">kontaktuppgifterna</a> här på sidan. Du kan
            också lämna in ett klagomål till{" "}
            <a
              href="https://www.imy.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Integritetsskyddsmyndigheten
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dataskydd;
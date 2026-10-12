import "../styles/services.css";
import "../App.css";

const ServicesSection = () => {
  return (
    <div id="services-section">
      <div classname="services-intro-container">
        <p className="subtitle">Våra tjänster</p>
        <h2>
          Du lever <span className="accent-color">ditt liv</span>. Vi ser till
          att det sker på <span className="accent-color">dina villkor</span>.
        </h2>
        <p>
          Vi på Strandbergs vet att ingen människa kan passa in i en mall och
          därför formar vi personliga lösningar efter ditt liv. Du vet vad som
          är bäst för dig och vi ser till att det blir verklighet. Vi arbetar
          efter FKs riktlinjer och följer de lagar och avtal som reglerar LSS
          och LASS.
        </p>
      </div>

      <div className="grid-container">
        <div className="grid-box">
          <h5>Personlig assistans</h5>
          <p>
            Vi tar det fulla arbetsgivaransvaret och ser till att dina
            assistenter får rätt förutsättningar att trivas och utvecklas. Med
            omsorgsfull rekrytering, trygg handledning och schyssta villkor
            skapar vi kontinuitet och trygghet i din vardag.
          </p>
        </div>
        <div className="grid-box">
          <h5>Juridisk rådgivning</h5>
          <p>
            Våra jurister hjälper dig kostnadsfritt med ansökan,
            myndighetskontakter och eventuella överklaganden. Vi gör det svåra
            mer begripligt och finns där vid din sida genom hela processen.
          </p>
        </div>
        <div className="grid-box">
          <h5>Byta assistansbolag</h5>
          <p>
            Funderar du på att byta anordnare? Vi lyssnar på dina önskemål och
            klurar ut dina alternativ. Vi tar hand om allt det praktiska och ser
            till att du får en smidig övergång till oss. Vi finns där för dig
            hela vägen.
          </p>
        </div>
        <div className="grid-box">
          <h5>Vi talar ditt språk</h5>
          <p>
            Att kunna uttrycka sig är a och o för att få rätt hjälp. Vårt team
            talar bland annat svenska, engelska, arabiska och serbokroatiska så
            att du kan uttrycka precis det du menar på ditt språk.
          </p>
        </div>
      </div>

      {/* <div className="grid-container">
        <div className="grid-box">

        </div>
      </div> */}
    </div>
  );
};

export default ServicesSection;

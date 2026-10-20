import "../styles/services.css";
import "../App.css";
import { ArrowIcon, HeartIcon, TargetIcon } from "./Icons";

const ServicesSection = () => {
  return (
    <div id="services-section">
      <div className="services-intro-container">
        <div>
          <p className="subtitle">Våra tjänster</p>
          <h2>
            Du lever <span className="accent-color">ditt liv</span>. Vi ser till
            att det sker på <span className="accent-color">dina villkor</span>.
          </h2>
          <p className="services-info-sub-container">
            Vi på Strandbergs vet att ingen människa kan passa in i en mall och
            därför formar vi personliga lösningar efter ditt liv. Du vet vad som
            är bäst för dig och vi ser till att det blir verklighet. Vi arbetar
            efter FKs riktlinjer och följer de lagar och avtal som reglerar LSS
            och LASS.
          </p>
        </div>
        <div className="services-btn-container">
          <a className="services-contact-btn" href="#contact">
            <svg
              className="heart-border"
              viewBox="2 3 20 19"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <path d="M12 21C5 15.5 3 12 3 8.8A4.8 4.8 0 0 1 7.8 4c1.8 0 3.2.9 4.2 2.4C13 4.9 14.4 4 16.2 4A4.8 4.8 0 0 1 21 8.8C21 12 19 15.5 12 21z" />
            </svg>
            <span className="services-contact-label">Låt oss prata om hur du vill leva!</span>
          </a>
        </div>
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

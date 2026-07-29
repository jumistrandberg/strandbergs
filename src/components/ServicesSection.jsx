import "../styles/services.css";
import "../App.css";

const ServicesSection = () => {
  return (
    <div id="services-section">
      <div classname="services-intro-container">
        <h2>Tjänster</h2>
        <p className="subtitle">
          Vi erbjuder skräddarsydd personlig assistans för allas rätt till ett
          värdigt liv
        </p>
      </div>

      <div className="grid-container">
        <div className="grid-box">
          <h5>Personlig assistans</h5>
          <p>Personlig assistans</p>
        </div>
        <div className="grid-box">
          <h5>Rådgivning</h5>
          <p>Personlig assistans</p>
        </div>
        <div className="grid-box">
          <h5>herj</h5>
          <p>Personlig assistans</p>
        </div>
        <div className="grid-box">
          <h5>herj</h5>
          <p>Personlig assistans</p>
        </div>
      </div>

    <div className="description-box"> 

    </div>
        <p style={{textAlign: "left"}}>
        Vi tar ett helhetsansvar för Din assistans. Du har alltid full inblick i
        vad som görs. Du styr själv hur mycket eller lite stöd du vill ha
        i din assistans. Vi arbetar efter FKs riktlinjer och följer de lagar
        och avtal som reglerar LSS och LASS.
      </p>
    </div>
  );
};

export default ServicesSection;

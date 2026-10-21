import { ArrowIcon, HeartIcon, TargetIcon } from "./Icons";
import "../styles/contact.css"

const ContactSection = () => {
  return (
    <>
      <section className="contact-section" id="contact-end">
        <div className="contact-text-container">
          <p className="subtitle">kontakta oss</p>
          <h2>
            Det börjar med ett <span className="accent-color">hej</span>.
          </h2>
          <div className="contact-container">
            <p>adress</p>
            <p>Helmfeltsgatan 2, 211 48 Malmö</p>
          </div>
          <div className="contact-container">
            <p>telefon</p>
            <p>040-60 85 600</p>
          </div>
          <div className="contact-container">
            <p>e-post</p>
            <p>info@strandbergs-assistans.se</p>
          </div>
          <div className="contact-container">
            <HeartIcon size={40} />
            <p>Vi talar svenska, engelska, arabiska och serbokroatiska.</p>
          </div>
        </div>

        <div className="contact-team-container">
          <p className="subtitle">vårt team</p>
          <div className="team-card">
            <h5>Anne Strandberg</h5>
            <p className="smaller-subtitle">VD</p>
            <hr />
            <p>040-60 85 600</p>
            <p>anne@strandbergs-assistans.se</p>
            <p>Svenska, English</p>
          </div>
          <div className="team-card">
            <h5>Suzanne Abbod</h5>
            <p className="smaller-subtitle">Verksamhetschef</p>
            <hr />
            <p>070-401 77 06</p>
            <p>suzanne@strandbergs-assistans.se</p>
            <p>Svenska, English, عربي</p>
          </div>
          <div className="team-card">
            <h5>Gitte Hoffmann</h5>
            <p className="smaller-subtitle">Koordinator</p>
            <hr />
            <p>040-60 85 601</p>
            <p>gitte@strandbergs-assistans.se</p>
            <p>Svenska, English, Dansk</p>
          </div>
          <div className="team-card">
            <h5>Edita Hromdzic</h5>
            <p className="smaller-subtitle">Lön- och ekonomiansvarig</p>
            <hr />
            <p>070-425 18 10</p>
            <p>edita@strandbergs-assistans.se</p>
            <p>Svenska, engelska</p>
          </div>
          <div className="team-card">
            <h5>Suzana Kulisic</h5>
            <p className="smaller-subtitle">Redovisningskonsult</p>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

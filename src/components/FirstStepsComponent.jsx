import { ArrowIcon, HeartIcon, TargetIcon } from "./Icons";
import "../styles/firststeps.css";
const FirstStepsComponent = () => {
  return (
    <>
      <section className="first-steps-section">
        <div className="first-steps-container">
          <div className="first-steps-text-container">
            <div>
              <p className="subtitle first-steps-text">Ett första steg</p>
              <h2 className="first-steps-text">
                Du behöver inte ha alla svar. Vi hjälper dig.
              </h2>
            </div>
            <button>
              Få hjälp din assistans
              <ArrowIcon />
            </button>
          </div>

          <div className="first-steps-number-container">
            <div className="first-steps-number-card">
              <p className="first-steps-number">01</p>
              <p className="first-steps-number-heading">Vi pratar</p>
              <p>
                Du berättar om din situation. Vi lyssnar och svarar på dina
                frågor.
              </p>
            </div>
            <div className="first-steps-number-card">
              <p className="first-steps-number">02</p>
              <p className="first-steps-number-heading">Vi går igenom</p>
              <p>
                Tillsammans tittar vi på ditt beslut eller vad som behövs för en
                ansökan.
              </p>
            </div>
            <div className="first-steps-number-card">
              <p className="first-steps-number">03</p>
              <p className="first-steps-number-heading">Vi planerar</p>
              <p>
                Vi hittar ett upplägg som känns rätt för dig och din vardag.
              </p>
            </div>
            <div className="first-steps-number-card">
              <p className="first-steps-number">04</p>
              <p className="first-steps-number-heading">Vi börjar</p>
              <p>
                Ditt team kommer på plats. Vi följer upp och finns nära till
                hands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstStepsComponent;

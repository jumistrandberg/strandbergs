import React from "react";
import { ArrowIcon, HeartIcon } from "./Icons";
import servicesImg from "../assets/iStock-585800040.webp";
import "../styles/method.css";

const MethodSection = () => {
  return (
    <section className="method-section">
      <div className="method-container">
        <div>
          <img
            src={servicesImg}
            alt="Bild på brukare och assistent som håller handen"
          />
        </div>
        <div className="method-sub-container">
          <div>
            <p className="subtitle">Strandbergsmetoden</p>
            <h3>
              Vi sätter <span className="accent-color">"personlig"</span> i
              personlig assistans
            </h3>
          </div>

          <p>
            Bra personlig assistans är just personlig. Vårt arbetssätt, som vi
            kallar Strandbergsmetoden, utgår från din rätt att forma ditt liv.
            Vi vet att alla människor är unika och inte passar in i färdiga
            mallar. Därför skapar vi unika lösingar för dig och ditt unika liv.
          </p>

          <div className="method-card-container">
            <div className="method-card">
              <HeartIcon size={40} />
              <div>
                <p className="method-card-heading">Vi lyssnar</p>
                <p className="method-card-text">
                  Vi lär känna dig, dina behov och vad du vill få ut av din
                  assistans.
                </p>
              </div>
            </div>
            <div className="method-card">
              <HeartIcon size={40} />
              <div>
                <p className="method-card-heading">Vi bygger ditt team</p>
                <p className="method-card-text">
                  Tillsammans hittar vi assistenter som passar både dig och din
                  vardag.
                </p>
              </div>
            </div>
            <div className="method-card">
              <HeartIcon size={40} />
              <div>
                <p className="method-card-heading">Vi finns kvar</p>
                <p className="method-card-text">
                  Vi följer upp, utvecklar och anpassar stödet när dina behov
                  förändras.
                </p>
              </div>
            </div>
          </div>
          <button className="btn-secondary about-btn">
            Boka kostnadsfri rådgivning
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
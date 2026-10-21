import { useState } from "react";
import { ArrowIcon } from "./Icons";
import "../styles/faq.css";

const faqs = [
  {
    question: "Vem kan få personlig assistans?",
    answer:
      "Rätten till personlig assistans prövas individuellt utifrån LSS, din personkrets och ditt behov av stöd. Kommunen eller Försäkringskassan fattar beslut. Vi hjälper dig att förstå vad som gäller i din situation och vilka underlag du kan behöva.",
  },
  {
    question: "Hur ansöker jag om assistans?",
    answer:
      "Du ansöker hos kommunen eller Försäkringskassan. Vi hjälper dig kostnadsfritt genom hela processen.",
  },
  {
    question: "Kan jag byta anordnare?",
    answer:
      "Ja, du har rätt att välja anordnare och kan byta när du vill. Vi hjälper dig med bytet.",
  },
  {
    question: "Kan jag behålla mina assistenter om jag byter anordnare?",
    answer:
      "Vi vet hur viktiga fungerande relationer är. Berätta vilka assistenter du vill fortsätta med, så går vi tillsammans igenom förutsättningarna för att de ska kunna följa med.",
  },
  {
    question: "Kan jag välja mina egna assistenter?",
    answer:
      "Ja. Din delaktighet är central i vårt arbetssätt. Vi utgår från dina behov, intressen och önskemål när vi rekryterar och bygger ditt team tillsammans med dig.",
  },
  {
    question: "Vad kostar det för mig?",
    answer:
      "Om du har beviljad assistansersättning bekostas assistansen av samhället. Hör av dig så går vi igenom din situation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="FAQ-section">
      <div className="FAQ-text-container">
        <p className="subtitle">vanliga frågor</p>
        <h2>
          Stora frågor. <span className="accent-color">Tydliga svar.</span>
        </h2>
        <p>Hittar du inte ditt svar? Vi hjälper dig gärna vidare.</p>
        <button className="btn-secondary about-btn">
          Ställ din fråga
          <ArrowIcon />
        </button>
      </div>

      <div className="FAQ-expand-container">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className={`FAQ-expand-card${isOpen ? " is-open" : ""}`}
            >
              <button
                type="button"
                className="FAQ-question"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.question}</span>
                <span className="FAQ-icon" aria-hidden="true" />
              </button>

              <div
                className="FAQ-answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="FAQ-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

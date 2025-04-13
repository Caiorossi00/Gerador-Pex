import faqData from "../../data/faq";
import "../../styles/Faq.scss";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <p>Faq</p>
        <h1>Perguntas Frequentes</h1>
        <h4>Tem dúvidas? Vou te ajudar.</h4>
      </div>
      <div className="faq-questions">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

import faqData from "../../data/faq";
import "../../styles/Faq.scss";

const Faq = () => {
  return (
    <div className="faq-container" id="faq">
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
      <div className="faq-pending">
        <div>
          <h1>Ainda tem dúvidas?</h1>
          <p>
            Você pode entrar em contato pessoalmente comigo em uma das minhas
            redes sociais
          </p>
        </div>

        <div className="faq-socials">
          <a
            href="https://www.linkedin.com/in/caio-rossi-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/53984158694"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;

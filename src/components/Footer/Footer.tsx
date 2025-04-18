import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="services-footer">
          <h1>Serviços</h1>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#form">Gerar Pex</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#apoie">Apoie o Projeto</a>
            </li>
          </ul>
        </div>

        <div className="socials-footer">
          <h1>Social</h1>
          <ul>
            <li>
              <a
                href="https://instagram.com/caiorossi.dev"
                target="_blank"
                rel="noopener noreferrer"
                title="Visitar o Instagram de Caio Rossi"
                aria-label="Instagram de Caio Rossi"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/caio-rossi-dev/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visitar o LinkedIn de Caio Rossi"
                aria-label="LinkedIn de Caio Rossi"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Caiorossi00"
                target="_blank"
                rel="noopener noreferrer"
                title="Visitar o GitHub de Caio Rossi"
                aria-label="GitHub de Caio Rossi"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-credits">
        <p>Este projeto foi gentilmente desenvolvido por Caio Rossi ♡</p>
        <p>18/04/2025</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
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
            >
              Instagram
            </a>
            <hr />
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caio-rossi-dev/">LinkedIn</a>
            <hr />
          </li>
          <li>
            <a href="https://github.com/Caiorossi00">Github</a>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import "../../styles/Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#form" onClick={() => setIsOpen(false)}>
            Gerar PEX
          </a>
        </li>
        <li>
          <a href="#faq" onClick={() => setIsOpen(false)}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#apoie" onClick={() => setIsOpen(false)}>
            Apoie o projeto
          </a>
        </li>
        <li className="hide-on-mobile">
          <button onClick={() => setIsOpen(false)}>
            <a href="#form">Experimentar</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

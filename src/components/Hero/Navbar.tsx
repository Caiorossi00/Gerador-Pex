import "../../styles/Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#form">Gerar PEX</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#apoie">Apoie o projeto</a>
        </li>
        <li>
          <button>
            <a href="#form">Experimentar</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}

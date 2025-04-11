import "../../styles/Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#">Quem sou eu?</a>
        </li>
        <li>
          <a href="#">Apoie o projeto</a>
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

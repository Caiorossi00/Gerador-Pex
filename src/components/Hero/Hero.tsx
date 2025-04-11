import "../../styles/Hero.scss";
import logo from "../../assets/logo.png";
import auxilioPex from "../../assets/Auxilio-pex-Caiorossidev.pdf";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Gerador de Pex</h1>
        <h2>Desenvolvido por @CaioRossi.dev</h2>
        <p>
          Gere o seu relatório de projeto de extensão com facilidade, em um
          sistema feito por um aluno, para alunos.<br></br>
          Clique no botão abaixo e monte o seu relatório em poucos minutos.
        </p>
        <div className="hero-buttons">
          <button className="primary">
            <a href="#form">Gerar Relatório</a>
          </button>

          <button className="secondary">
            <a href={auxilioPex} target="_blank" rel="noopener noreferrer">
              Como fazer a pex?
            </a>
          </button>
        </div>
      </div>

      <div className="hero-right">
        <a
          href="https://www.instagram.com/caiorossi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Logo Caiorossi.dev" />
        </a>
      </div>

      <p className="hero-credit">
        Este projeto é desenvolvido de forma 100% independente, sem nenhum
        vínculo com a universidade Descomplica.
      </p>
    </section>
  );
}

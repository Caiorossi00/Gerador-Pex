import "../../styles/Hero.scss";
import auxilioPex from "../../assets/Auxilio-pex-Caiorossidev.pdf";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Gerador de Pex</h1>
        <h2>
          <a
            href="https://instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-gradient"
          >
            Desenvolvido por @CaioRossi.dev
          </a>
        </h2>

        <p className="hero-info">
          Gere o seu relatório de projeto de extensão com facilidade, em um
          projeto feito por um aluno, para alunos.<br></br>
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

      <p className="hero-credit">
        Este projeto é desenvolvido de forma 100% independente, sem nenhum
        vínculo com a universidade Descomplica.
      </p>
    </section>
  );
}

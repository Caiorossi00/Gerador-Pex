import { useState } from "react";
import "../../styles/Apoio.scss";
import logo from "../../assets/1.png";
import qrPix from "../../assets/qrPix.jpg";

const Apoie = () => {
  const [copiado, setCopiado] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("53984158694");
    setCopiado(true);
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  return (
    <div id="apoie">
      <div className="apoio-header">
        <h1>Gostou da ideia e quer me ajudar?</h1>
        <p>
          Apoiar boas ideias é como jogar sementes ao vento.<br></br> Quando
          você incentiva projetos feitos com dedicação e boas intenções, está
          ajudando a espalhar mais soluções positivas no mundo.<br></br> Cada
          gesto de apoio mostra que vale a pena acreditar, criar e agir com
          propósito. <br></br>Que este espaço te inspire a agir também.
        </p>
      </div>

      <div className="apoio-resultados">
        <h3>
          <span>+7 </span>Novos Seguidores
        </h3>
        <h3>
          <span>+3 </span>Doadores
        </h3>
      </div>

      <div className="apoio-box-container">
        <div className="apoio-box">
          <div className="apoio-box-left">
            <h1>Você pode me apoiar me seguindo no Instagram!</h1>
            <a
              className="btn-seguir"
              href="https://instagram.com/caiorossi.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir
            </a>
          </div>
          <div className="apoio-box-right">
            <img src={logo} />
          </div>
        </div>

        <div className="apoio-box">
          <div className="apoio-box-left">
            <h1>Você pode me apoiar financeiramente!</h1>
            <p className="chave-pix">Chave pix: 53984158694</p>
            <button className="btn-doar" onClick={handleCopyPix}>
              {copiado ? "Chave copiada!" : "Copiar a chave PIX"}
            </button>
          </div>
          <div className="apoio-box-right">
            <img src={qrPix} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apoie;

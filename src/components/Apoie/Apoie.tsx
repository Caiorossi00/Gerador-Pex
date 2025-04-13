import "../../styles/Apoio.scss";
import logo from "../../assets/1.png";

const Apoie = () => {
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
          <span>+2 </span>Novos Seguidores
        </h3>
        <h3>
          <span>+2 </span>Doadores
        </h3>
      </div>

      <div className="apoio-box-container">
        <div className="apoio-box">
          <div className="apoio-box-left">
            <h1>Você pode me apoiar me seguindo no Instagram!</h1>
            <button className="btn-seguir">Seguir</button>
          </div>
          <div className="apoio-box-right">
            <img src={logo} />
          </div>
        </div>
        <div className="apoio-box">
          <div className="apoio-box-left">
            <h1>Você pode me apoiar financeiramente!</h1>
            <p className="chave-pix">Chave pix: 53984158694</p>
            <button className="btn-doar">Copiar a chave PIX</button>
          </div>
          <div className="apoio-box-right">
            <img src="https://plus.unsplash.com/premium_photo-1668650610258-043278428a93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apoie;

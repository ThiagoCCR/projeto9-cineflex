export default function Seats() {
  return (
    <div className="main">
      <div className="title">
        <h1>Selecione o horário</h1>
      </div>
      <div className="container seats">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div>
        <div className="seat-example">
          <div className="seat selected"></div>
          <p>Selecionado</p>
        </div>
        <div className="seat-example">
          <div className="seat available"></div>
          <p>Disponível</p>
        </div>
        <div className="seat-example">
          <div className="seat unavailable"></div>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="container input">
        <div>
          <p>Nome do Comprador:</p>
          <input name="buyer-name" placeholder="Digite seu nome..."></input>
        </div>
        <div>
          <p>CPF do Comprador:</p>
          <input name="buyer-doc" placeholder="Digite seu CPF..."></input>
        </div>
      </div>
    </div>
  );
}

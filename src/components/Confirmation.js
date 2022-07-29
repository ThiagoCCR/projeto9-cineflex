import { useNavigate } from "react-router-dom";



export default function Confimation(props) {
  const navigate = useNavigate();

  function Redirect(){
    navigate('/')
    
  }

  return (
    <>
      <div className="main final">
        <div className="title">
          <h1 className="green">Pedido feito com sucesso!</h1>
        </div>
        <div className="success">
          <div className="final-info">
            <h2>Filme e sessão</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </div>
          <div className="final-info">
            <h2>Ingressos</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </div>
          <div className="final-info">
            <h2>Comprador</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </div>
        </div>
        <button onClick={Redirect}>Voltar pra Home</button>
      </div>
    </>
  );
}

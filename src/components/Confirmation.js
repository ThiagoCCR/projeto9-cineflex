import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Confimation(props) {
  const navigate = useNavigate();

  function Redirect() {
    navigate("/");
  }

  return (
    <>
      <Main>
        <Title>
          <h1 className="green">Pedido feito com sucesso!</h1>
        </Title>
        <Success>
          <FinalInfo>
            <h2>Filme e sessão</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </FinalInfo>
          <FinalInfo>
            <h2>Ingressos</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </FinalInfo>
          <FinalInfo>
            <h2>Comprador</h2>
            <div>
              <p>Enola Holmes</p>
              <p>24/06/2021 15:00</p>
            </div>
          </FinalInfo>
        </Success>
        <Button onClick={Redirect}>Voltar pra Home</Button>
      </Main>
    </>
  );
}

const Main = styled.div`
  margin-top: 110px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif !important;
`;

const Title = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  h1 {
    font-size: 24px;
    font-family: "Roboto", sans-serif !important;
    color: #247a6b;
    font-weight: 700 !important;
  }
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 474px;
  padding-right: 180px;
`;

const FinalInfo = styled.div`
  margin-bottom: 40px;

  > div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 40px;
  }
`;

const Button = styled.button`
  background-color: #e8833a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  border: none;
  margin-right: 15px;
  width: 200px;
  height: 43px;
  cursor:pointer
  border-radius: 3px;
`;

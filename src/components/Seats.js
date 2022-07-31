import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Seat from "./Seat";
import axios from "axios";
import styled from "styled-components";
import Footer from "./Footer";

export default function Seats({ movieData, setMovieData }) {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [seatsName, setSeatsName] = useState([]);
  const [doc, setDoc] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const objAPI = { ids: [...chosenSeats], name: name, cpf: doc };

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      console.log(res.data)
      setSeats(res.data.seats);
    });
  }, []);

  useEffect(() => {
    setMovieData({ ...movieData, seats: [...seatsName] });
  }, [seatsName]);

  function submitData(e) {
    e.preventDefault();
    setName("");
    setDoc("");

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      objAPI
    );

    promise.then(() => {
      navigate("/sucesso", {
        replace: false,
        state: { cpf: doc, name: name, seats: chosenSeats },
      });
    });

    promise.catch((err) => console.log(err.response));
  }

  return (
    <>
      <Main>
        <Container>
          <Title>
            <h1>Selecione o horário</h1>
          </Title>
          <ContainerSeats>
            {seats.map((value, index) => (
              <Seat
                key={index}
                name={value.name}
                id={value.id}
                isAvailable={value.isAvailable}
                chosenSeats={chosenSeats}
                setChosenSeats={setChosenSeats}
                seatsName={seatsName}
                setSeatsName={setSeatsName}
              />
            ))}
          </ContainerSeats>
          <div>
            <SeatExample>
              <SeatSelected></SeatSelected>
              <p>Selecionado</p>
            </SeatExample>
            <SeatExample>
              <SeatAvailable></SeatAvailable>
              <p>Disponível</p>
            </SeatExample>
            <SeatExample>
              <SeatUnavailable></SeatUnavailable>
              <p>Indisponível</p>
            </SeatExample>
          </div>
          <form onSubmit={submitData}>
            <ContainerInput>
              <div>
                <p>Nome do Comprador:</p>
                <input
                  name="buyer-name"
                  placeholder="Digite seu nome..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <p>CPF do Comprador:</p>
                <input
                  name="buyer-doc"
                  placeholder="Digite seu CPF..."
                  value={doc}
                  onChange={(e) => setDoc(e.target.value)}
                  required
                ></input>
              </div>
            </ContainerInput>
            <Button type="submit">Reservar assentos(s)</Button>
          </form>
        </Container>
      </Main>
      <Footer>
        <div>
          <img alt="FooterPoster" src={movieData.url} />
        </div>
        <div>
          <p>{movieData.title}</p>
          <p>{movieData.session}</p>
        </div>
      </Footer>
    </>
  );
}

const Main = styled.div`
  margin-top: 110px;
  margin-bottom: 150px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif !important;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  margin-left: auto;
  margin-right: auto;

  > :nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  h1 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Roboto", sans-serif !important;
  }
`;

const ContainerSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: initial;
  column-gap: 10px;
  padding: 20px;
  justify-content: center;
`;

const ContainerInput = styled.div`
  margin-top: 40px;
  font-size: 13px;
  font-weight: 400;

  div {
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
  input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-style: italic;
    color: #afafaf;
    font-size: 18px;
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
  width: 225px;
  height: 43px;
  border-radius: 3px;
`;

const SeatExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`;
const SeatSelected = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #8dd7cf;
  border: 1px solid #1aae9e;
`;
const SeatAvailable = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #c3cfd9;
  border: 1px solid #7b8b99;
`;
const SeatUnavailable = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fbe192;
  border: 1px solid #f7c52b;
`;

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Seat from "./Seat";
import axios from "axios";
import SeatExamples from "./SeatExamples";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSeats(res.data.seats);
    });
  }, []);

  return (
    <div className="main">
      <div className="flex">
        <div className="title">
          <h1>Selecione o horário</h1>
        </div>
        <div className="container seats">
          {seats.map((value, index) => (
            <Seat
              key={index}
              name={value.name}
              isAvailable={value.isAvailable}
              chosenSeats={chosenSeats}
              setChosenSeats={setChosenSeats}
            />
          ))}
        </div>
        <SeatExamples />
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
        <button>Reservar assentos(s)</button>
      </div>
    </div>
  );
}

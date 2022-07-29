import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Seat from "./Seat";
import axios from "axios";
import SeatExamples from "./SeatExamples";

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [doc, setDoc] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const objAPI = { ids: [...chosenSeats], name: name, cpf: doc };

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSeats(res.data.seats);
    });
  }, []);

  function submitData(e) {
    e.preventDefault();
    setName("");
    setDoc("");

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      objAPI
    );

    promise.then(() => {
      console.log('oi')
      navigate("/sucesso",  {replace:false, state: "props"});
    });

    promise.catch((err) => console.log(err.response))
  }

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
              id={value.id}
              isAvailable={value.isAvailable}
              chosenSeats={chosenSeats}
              setChosenSeats={setChosenSeats}
            />
          ))}
        </div>
        <SeatExamples />
        <form onSubmit={submitData}>
          <div className="container input">
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
          </div>
          <button type="submit">Reservar assentos(s)</button>
        </form>
      </div>
    </div>
  );
}

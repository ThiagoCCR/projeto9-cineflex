import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Session from "./Session";

export default function Sessoes() {
  const params = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
    );

    promise.then((res) => {
      setSessions(res.data.days);
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Selecione o horário</h1>
        </div>
        <div className="container sessions">
          {sessions.map((value, index) => (
            <Session key={index} data={value} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

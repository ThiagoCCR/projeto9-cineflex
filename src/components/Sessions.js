import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Session from "./Session";
import styled from "styled-components";

export default function Sessoes({ movieData, setMovieData, setHomeButton }) {
  const params = useParams();
  const [sessions, setSessions] = useState([]);
  const [data, setData] = useState({})

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
    );

    promise.then((res) => {
      setData(res.data)
      setSessions(res.data.days);
    });
  }, []);

  return (
    <>
      <Main>
        <Title>
          <h1>Selecione o horário</h1>
        </Title>
        <Container>
          {sessions.map((value, index) => (
            <Session
              movieData={movieData}
              setMovieData={setMovieData}
              key={index}
              data={value}
            />
          ))}
        </Container>
      </Main>
      <Footer>
        <div>
          <img alt="FooterPoster" src={data.posterURL} />
        </div>
        <div>
          <p>{data.title}</p>
        </div>
      </Footer>
    </>
  );
}

const Main = styled.div`
  margin-top: 110px;
  margin-bottom: 180px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-y: scroll;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

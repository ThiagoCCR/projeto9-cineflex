import { useState, useEffect } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";
import Footer from "./Footer";
import styled from "styled-components";

export default function Home({movieData, setMovieData}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promise.then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <Main>
      <Title>
        <h1>Selecione o filme</h1>
      </Title>
      <Container>
        {movies.map((movie, index) => (
          <MovieBox movieData={movieData} setMovieData={setMovieData} name={movie.title} key={index} url={movie.posterURL} idFilme={movie.id} />
        ))}
      </Container>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 110px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
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
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 20px;
  box-sizing: border-box;
`;

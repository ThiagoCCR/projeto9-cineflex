import { useState, useEffect } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";

export default function Home() {

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
      <div className="main">
        <div className="title">
          <h1>Selecione o filme</h1>
        </div>
        <div className="container movies">
          {movies.map((movie, index) => (
            <MovieBox key={index} url={movie.posterURL} idFilme={movie.id}/>
          ))}
        </div>
      </div>
  );
}

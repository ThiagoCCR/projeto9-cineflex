import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home.js";
import Header from "./Header.js";
import Sessions from "./Sessions";
import Seats from "./Seats.js";
import Confimation from "./Confirmation.js";

export default function App() {
  const [movieData, setMovieData] = useState({
    url: "",
    title: "",
    session: "",
    seats: [],
  });
  const [homeButton, setHomeButton] = useState(false);

  return (
    <BrowserRouter>
      <Header homeButton={homeButton}/>
      <Routes>
        <Route
          path="/"
          element={<Home movieData={movieData} setMovieData={setMovieData} setHomeButton={setHomeButton} />}
        />
        <Route
          path="/sessoes/:idFilme"
          element={
            <Sessions movieData={movieData} setMovieData={setMovieData}/>
          }
        />
        <Route
          path="/assentos/:idSessao"
          element={<Seats movieData={movieData} setMovieData={setMovieData} setHomeButton={setHomeButton}/>}
        />
        <Route
          path="/sucesso"
          element={
            <Confimation movieData={movieData} setMovieData={setMovieData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

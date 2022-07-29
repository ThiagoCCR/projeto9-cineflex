import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Header from "./Header.js";
import Sessions from "./Sessions";
import Seats from "./Seats.js";
import Confimation from "./Confirmation.js";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/sessoes/:idFilme" element={<Sessions />} />
        <Route path = "/assentos/:idSessao" element={<Seats />} />
        <Route path = "/sucesso" element={<Confimation />} />
      </Routes>
    </BrowserRouter>
  );
}

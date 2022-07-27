import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Header from "./Header.js";
import Sessoes from "./Sessoes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/sessoes/" element={<Sessoes />} />
      </Routes>
    </BrowserRouter>
  );
}

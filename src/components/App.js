import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

import Session from "./Session";
import Footer from "./Footer";

export default function Sessoes() {
  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Selecione o horário</h1>
        </div>
        <Session />
      </div>
      <Footer />
    </>
  );
}

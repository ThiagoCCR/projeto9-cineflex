export default function SeatExamples(){
    return (
        <div>
          <div className="seat-example">
            <div className="seat selected"></div>
            <p>Selecionado</p>
          </div>
          <div className="seat-example">
            <div className="seat available"></div>
            <p>Disponível</p>
          </div>
          <div className="seat-example">
            <div className="seat unavailable"></div>
            <p>Indisponível</p>
          </div>
        </div>
    )
}
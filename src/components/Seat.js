import { useState, useEffect } from "react";

export default function Seat({
  isAvailable,
  name,
  chosenSeats,
  setChosenSeats,
}) {
  const [selected, setSelected] = useState(false);

  function selectSeat() {
    isAvailable ? setSelected(!selected) : alert("Este assento não está disponível");
  }
  
  useEffect(()=> selected ? setChosenSeats([...chosenSeats, name]) : setChosenSeats(chosenSeats.filter((value) => value !== name))
  ,[selected]);

  if (selected) {
    return (
      <div className="seat selected" onClick={selectSeat}>
        {name}
      </div>
    );
  } else if (isAvailable === true) {
    return (
      <div className="seat available" onClick={selectSeat}>
        {name}
      </div>
    );
  } else {
    return (
      <div className="seat unavailable" onClick={selectSeat}>
        {name}
      </div>
    );
  }
}

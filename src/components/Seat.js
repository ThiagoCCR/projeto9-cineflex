import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Seat({
  isAvailable,
  id,
  name,
  chosenSeats,
  setChosenSeats,
  seatsName,
  setSeatsName,
}) {
  const [selected, setSelected] = useState(false);

  function selectSeat() {
    if (isAvailable) {
      setSelected(!selected);
    } else {
      alert("Este assento não está disponível");
    }
  }

  useEffect(() => {
    selected
      ? setChosenSeats([...chosenSeats, id])
      : setChosenSeats(chosenSeats.filter((value) => value !== id));

    selected
      ? setSeatsName([...seatsName, name])
      : setSeatsName(seatsName.filter((value) => value !== name));
  }, [selected]);

  if (selected) {
    return <SeatSelected onClick={selectSeat}>{name}</SeatSelected>;
  } else if (isAvailable === true) {
    return <SeatAvailable onClick={selectSeat}>{name}</SeatAvailable>;
  } else {
    return <SeatUnavailable onClick={selectSeat}>{name}</SeatUnavailable>;
  }
}

const SeatSelected = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #8dd7cf;
  border: 1px solid #1aae9e;
`;
const SeatAvailable = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #c3cfd9;
  border: 1px solid #7b8b99;
`;
const SeatUnavailable = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fbe192;
  border: 1px solid #f7c52b;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ sessionHour, sessionId }) {
  return (
    <Link to={`/assentos/${sessionId}`}>
      <Buttonn>{sessionHour}</Buttonn>
    </Link>
  );
}

const Buttonn = styled.button`
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
  background-color: #e8833a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  border: none;
  margin-right: 15px;
  width: 225px;
  height: 43px;
  border-radius: 3px;
`;

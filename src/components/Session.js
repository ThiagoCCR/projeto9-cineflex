import Button from "./Button";
import styled from "styled-components";

export default function Session({ data }) {
  return (
    <Container>
      <div>
        <h2>
          {data.weekday} - {data.date}
        </h2>
        <ButtonWrapper>
          {data.showtimes.map((value, index) => (
            <Button key={index} sessionHour={value.name} sessionId={value.id} />
          ))}
        </ButtonWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 22px;
    margin-top: 22px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none !important;

  button {
    background-color: #e8833a;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
    border: none;
    margin-right: 15px;
    width: 83px;
    height: 43px;
    border-radius: 3px;
  }
`;

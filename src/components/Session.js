import styled from "styled-components";
import {Link} from "react-router-dom"

export default function Session({ data, movieData, setMovieData }) {

  function updateFooter(params){
    
    setMovieData({...movieData, session: `${data.date} - ${params}` })

  }

  return (
    <Container>
      <div>
        <h2>
          {data.weekday} - {data.date}
        </h2>
        <ButtonWrapper>
          {data.showtimes.map((value, index) => (
            <Link to={`/assentos/${value.id}`}><Buttonn onClick={()=>updateFooter(value.name)} key={index}>{value.name}</Buttonn></Link>
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


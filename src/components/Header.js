import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header({ homeButton }) {
  const navigate = useNavigate();

  if (homeButton) {
    return (
      <HeaderHome>
        <div
          onClick={() =>navigate("/")} >
          <ion-icon name="home"></ion-icon>
        </div>
        <h1>CINEFLEX</h1>
      </HeaderHome>
    );
  } else {
    return (
      <Headerr>
        <h1>CINEFLEX</h1>
      </Headerr>
    );
  }
}

const Headerr = styled.div`
  color: #e8833a;
  font-size: 34px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3cfd9;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  font-family: "Roboto", sans-serif !important;
  z-index: 1;
  height: 67px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const HeaderHome = styled.div`
  color: #e8833a;
  font-size: 34px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c3cfd9;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  font-family: "Roboto", sans-serif !important;
  z-index: 1;
  height: 67px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    >div{
      color:white;
      border-radius:50%;
      font-size:25px; 
      background-color:  #e8833a;
      width: 40px;
      height:40px;   
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:15px;
      left:15px;
    }


`;

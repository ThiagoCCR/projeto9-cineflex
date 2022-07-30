import styled from "styled-components";

export default function Footer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.footer`
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
  position: fixed;
  height: 117px;
  left: 0px;
  right: 0;
  bottom: 0px;
  background-color: #dfe6ed;
  border: 1px solid #dfe6ed;
  display:flex;
  justify-content: flex-start;
  align-items:center;
  font-size: 26px;
  color:#293845;
  padding-left:20px;
  
  img {
    width: 100%;
    height: 100%;
  }

  > :nth-child(1) {
    width: 64px;
    height: 89px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding:8px
  }

  > :nth-child(2) {
    margin-left:20px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
  }
`;

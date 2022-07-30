import styled from "styled-components";


export default function Header() {
  return (
    <Headerr>
      <h1>CINEFLEX</h1>
    </Headerr>
  );
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
  z-index: 1;
  height: 67px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

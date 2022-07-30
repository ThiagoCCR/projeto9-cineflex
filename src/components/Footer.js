import styled from "styled-components";

export default function Footer({ children }) {
  return <Footerr>{children}</Footerr>;
}

const Footerr = styled.footer`
  font-family: "Roboto", sans-serif !important;
  box-sizing: border-box;
  position: fixed;
  height: 117px;
  left: 0px;
  right: 0;
  bottom: 0px;
  background-color: #dfe6ed;
  border: 1px solid #dfe6ed;
`;

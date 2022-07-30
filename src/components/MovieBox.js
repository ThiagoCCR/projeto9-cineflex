import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieBox({ url, idFilme }) {
  return (
    <Link to={`/sessoes/${idFilme}`}>
      <Movie>
        <Poster src={url} alt="Movie-box" />
      </Movie>
    </Link>
  );
}

const Movie = styled.div`
  width: 129px;
  height: 193px;
  background-color: #ffffff;
  padding: 8px;
  margin-top: 11px;
  cursor: pointer;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;
`;

const Poster = styled.img`

width: 100%;
height: 100%;

`

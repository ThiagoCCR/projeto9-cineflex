import {Link} from "react-router-dom"



export default function MovieBox({ url, idFilme}) {

  return (
    <Link to="/sessoes/">
      <div className="movie">
        <img src={url} alt="Movie-box" />
      </div>
    </Link>
  );
}

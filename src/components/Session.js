import { Link } from "react-router-dom";


export default function Session({ data }) {
  return (
    <Link to={`/assentos/${data.id}`}>
      <div className="container sessions">
        <div className="session">
          <h2>
            {data.weekday} - {data.date}
          </h2>
          <div className="container session-buttons">
            {data.showtimes.map((value) => (
              <button>{value.name}</button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

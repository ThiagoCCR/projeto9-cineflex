import { Link } from "react-router-dom";

export default function Button({sessionHour, sessionId}) {
  return (
    <Link to={`/assentos/${sessionId}`}>
      <button>
        {sessionHour}
      </button>
    </Link>
  );
}

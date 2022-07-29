import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";


export default function Session({ data }) {

  return (
      <div className="container sessions">
        <div className="session">
          <h2>
            {data.weekday} - {data.date}
          </h2>
          <div className="container session-buttons">
            {data.showtimes.map((value, index) => (
              <Button key={index} sessionHour={value.name} sessionId={value.id}/>
            ))}
          </div>
        </div>
      </div>
  );
}

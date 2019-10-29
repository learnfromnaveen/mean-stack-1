import React from "react";
import './card.css';

function Card(props) {
  return (
    <div className="card">
      <img src="/images/img_avatar2.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{props.user.name}</b>
        </h4>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
}

export default Card;
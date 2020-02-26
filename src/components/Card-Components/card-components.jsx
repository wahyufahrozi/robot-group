import React from "react";
import "./card.styles.css";
export const CardComponents = props => {
  return (
    <div className="card-container">
      <img
        alt="name robot"
        src={`https://robohash.org/${props.robot.id}.png?set=set1&size=180x180`}
      />
      <h2>{props.robot.name}</h2>
      <p>{props.robot.email}</p>
    </div>
  );
};

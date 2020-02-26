import React from "react";
import { CardComponents } from "../Card-Components/card-components";
import "./card-list.styles.css";

export const CardList = props => {
  const { robots } = props;

  return (
    <div className="card-list">
      {robots.map(robot => (
        <CardComponents key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

import { Card } from "react-bootstrap";
import React from "react";
import { BiMap, BiPhone } from "react-icons/bi";

function MyCard({ details }) {
  return (
    <Card>
      <Card.Body className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt=""
        />

        <Card.Title className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </Card.Title>

        <Card.Title>
          <span>
            <BiMap /> {details.location?.city}
          </span>
          <br />
          <span>
            <BiPhone /> {details?.phone}
          </span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MyCard;

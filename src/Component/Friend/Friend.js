import React from "react";
import { Card } from "react-bootstrap";

const Friend = (props) => {
  const { name, phone, website, address } = props.friend;
  return (
    <>
      {/* <h2>I am {name}</h2>

      <h5>call me {phone}</h5>
      <p>visit me {website}</p>
      <p>i live in {address.city}</p> */}
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ].map((variant, idx) => (
          <div className="col ">
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
        <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Title>phone number : {phone} </Card.Title>
            <h5>visit me {website}</h5>
            <p>adress {address.city}</p>
          </Card.Body>
        </Card>
    </div>
      ))}
  </>
  );
};

export default Friend;

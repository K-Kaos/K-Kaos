import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function MemberInfoCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {"Major: " + props.major}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {"ID: " + props.idNum}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {"Phone: " + props.phoneNum}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {"Email: " + props.email}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}

export default MemberInfoCard;

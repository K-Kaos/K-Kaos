import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function MemberCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="yellow">K-Kaos</span> The development story of <span className="yellow">K-Kaos developers</span> at <span className="yellow">Gachon University. </span>
            <br />
            <br />
            <br />
            An extraordinary project More and more reasons to focus on this.
            </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Data Management Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Next Generation Chatbot
            </li>
            <li className="about-activity">
              <ImPointRight /> System Architecture
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MemberCard;

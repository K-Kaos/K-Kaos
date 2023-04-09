import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TimelineCard from "./TimelineCards";
import Particle from "../Particle";
import notyet from "../../Assets/Timelines/notyet.png"

import week_1 from "../../Assets/Timelines/week_1.png";
import week_2 from "../../Assets/Timelines/week_2.png";
import week_3 from "../../Assets/Timelines/week_3.png";
import week_4 from "../../Assets/Timelines/week_4.png";
import week_5 from "../../Assets/Timelines/week_5.png";
// import week_6 from "../../Assets/Timelines/week_6.png";
// import week_7 from "../../Assets/Timelines/week_7.png";
// import week_8 from "../../Assets/Timelines/week_8.png";
// import week_9 from "../../Assets/Timelines/week_9.png";
// import week_10 from "../../Assets/Timelines/week_10.png";
// import week_11 from "../../Assets/Timelines/week_11.png";
// import week_12 from "../../Assets/Timelines/week_12.png";
// import week_13 from "../../Assets/Timelines/week_13.png";
// import week_14 from "../../Assets/Timelines/week_14.png";
// import week_15 from "../../Assets/Timelines/week_15.png";
//import suicide from "../../Assets/Projects/suicide.png";


function Timelines() {
  return (
    <Container fluid className="timeline-section">
      <Particle />
      <Container>
        <h1 className="timeline-heading">
          Our <strong className="yellow">Timelines </strong>
        </h1>
        <p style={{ color: "white" }}>
          Our story will be uploaded week by week!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={week_1}
              isBlog={false}
              title="Week 1"
              description="Our first meeting! We're new to each other, but We have a feeling we'll get along well!"
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={week_2}
              isBlog={false}
              title="Week 2"
              description="It's already been a week since we met! We took team pictures together."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={week_3}
              isBlog={false}
              title="Week 3"
              description="Getting together and coding! We are so sad that there are so many errors."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={week_4}
              isBlog={false}
              title="Week 4"
              description="Getting together and working on a requirement specification and coding. The journey is the reward!"
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={week_5}
              isBlog={false}
              title="Week 5"
              description="Our snack time Let's eat delicious food and work harder!"
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 6"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 7"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 8"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 9"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 10"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 11"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 12"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 13"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 14"
              description="comming soon..."
            />
          </Col>

          <Col md={4} className="timeline-card">
            <TimelineCard
              imgPath={notyet}
              isBlog={false}
              title="Week 15"
              description="comming soon..."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Timelines;

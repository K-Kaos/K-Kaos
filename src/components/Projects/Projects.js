import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import database from "../../Assets/Projects/database.jpg";
import chat from "../../Assets/Projects/chat.jpg";
import system from "../../Assets/Projects/system.jpg";
import empty from "../../Assets/Projects/empty.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are team projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Next Generation Chatbot"
              description="NGC term project."
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              demoLink="https://github.com/yeon409/KEA_K-Kaos.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Database Management Technology"
              description="DMT term project."
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              demoLink="https://github.com/yeon409/KEA_K-Kaos.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system}
              isBlog={false}
              title="System Architecture"
              description="SA term projcet."
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              demoLink="https://github.com/yeon409/KEA_K-Kaos.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title="EMPTY"
              description="EMPTY"
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              // demoLink="https://github.com/yeon409/KEA_K-Kaos.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title="EMPTY"
              description="EMPTY"
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              // demoLink="https://github.com/yeon409/KEA_K-Kaos.git" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title="EMPTY"
              description="EMPTY"
              ghLink="https://github.com/yeon409/KEA_K-Kaos.git"
              // demoLink="https://github.com/yeon409/KEA_K-Kaos.git" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

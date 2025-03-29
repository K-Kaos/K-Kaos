import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Membercard from "./MemberCard";
import MemberInfoCard from "./MemberInfoCard";

import seobin from "../../Assets/Projects/seobin.jpg";
import cindy from "../../Assets/Projects/cindy.jpg";
import jueun from "../../Assets/Projects/jueun.jpg"
import jykyeong from "../../Assets/Projects/jykyeong.jpg"
import sonya from "../../Assets/Projects/sonya.jpg"
import member from "../../Assets/Projects/member.jpg"

function Member() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="yellow">WE'RE</strong>
            </h1>
            <Membercard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={member} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Container>
        <h1 className="project-heading">
          Our <strong className="yellow">Team Member </strong>
        </h1>
        <p style={{ color: "white" }}>
         This is information from our team members.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <MemberInfoCard
              imgPath={jykyeong}
              isBlog={false}
              name="장예경"
              major="Computer Science"
              idNum="201835725"
              phoneNum="010-6414-6847"
              email="jykyeong99@gachon.ac.kr"
              ghLink="https://github.com/jykyeong99"
            />
          </Col>

          <Col md={4} className="project-card">
            <MemberInfoCard
              imgPath={seobin}
              isBlog={false}
              name="이서빈"
              major="Software"
              idNum="201935096"
              phoneNum="010-6554-1296"
              email="leeseobin000709@gmail.com"
              ghLink="https://github.com/leeseobin00"
            />
          </Col>

          <Col md={4} className="project-card">
            <MemberInfoCard
              imgPath={cindy}
              isBlog={false}
              name="유소연"
              major="Software"
              idNum="202035353"
              phoneNum="010-7528-7679"
              email="yeon000409@gmail.com"
              ghLink="https://github.com/yeon409"
            />
          </Col>

          <Col md={4} className="project-card">
            <MemberInfoCard
              imgPath={sonya}
              isBlog={false}
              name="이소현"
              major="Software"
              idNum="202035362"
              email="siso1204@gachon.ac.kr"
              ghLink="https://github.com/Esoh124"
            />
          </Col>

          <Col md={4} className="project-card">
            <MemberInfoCard
              imgPath={jueun}
              isBlog={false}
              name="윤주은"
              major="Software"
              idNum="202037634"
              phoneNum="010-6594-7694"
              email="00-10-21@naver.com"
              ghLink="https://github.com/001021"
            />
          </Col>
        </Row>
      </Container>
            
      </Container>
    </Container>
  );
}

export default Member;

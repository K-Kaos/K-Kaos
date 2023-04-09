import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>

              <span className="yellow" style={ {fontSize: "2.65em"}}>K-KAOS</span>

              <br />

              <span className="yellow"> K</span>ill <span className="yellow"> A</span>ll <span className="yellow"> O</span>n <span className="yellow"> S</span>ight
            </h1>
            <p className="home-about-body">
              <i> <b className="yellow">K-KAOS</b> </i>
              stands for 
              <i> <b className="yellow">Kill All On Sight</b>
              </i>, a name that expresses the determination to become the
              <i> <b className="yellow">No. 1 Korean developer</b> </i>
              by eliminating all obstacles or competitors.
              <br />
              <br />
              <i className="yellow"><b>"Present innovative ideas and creative solutions, and position ourselves as a leading talent." </b> </i>
              <br />
              <br />

              K-KAOS will be a team that can present 
              <i className="yellow">innovative ideas and creative solutions
                </i> and establish itself as a leading talent in the industy.{" "}
              <br />
              <br />
              To this end, we will exercise 
              <i className="yellow">free thinking
              </i> and
              <i className="yellow">
                  {" "}
                  creativity
              </i> 
              , and
              <i className="yellow"> present various ideas and solutions to solve problems.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yeon409/KEA_K-Kaos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/seob.__.n/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

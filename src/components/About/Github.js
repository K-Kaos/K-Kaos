import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days We <strong className="yellow">Code</strong>
      </h1>
      <h4>Days <strong className="yellow">YeKyeong</strong>'s code</h4>
      <GitHubCalendar
        username="jykyeong99"
        blockSize={15}
        blockMargin={5}
        color="#e7f070"
        fontSize={16}
      />
      <h4>Days <strong className="yellow">Seobin</strong>'s code</h4>
      <GitHubCalendar
        username="leeseobin00"
        blockSize={15}
        blockMargin={5}
        color="#e7f070"
        fontSize={16}
      />
      <h4>Days <strong className="yellow">SoYeon</strong>'s code</h4>
      <GitHubCalendar
        username="yeon409"
        blockSize={15}
        blockMargin={5}
        color="#e7f070"
        fontSize={16}
      />
      <h4>Days <strong className="yellow">Sohyun</strong>'s code</h4>
      <GitHubCalendar
        username="Esoh124"
        blockSize={15}
        blockMargin={5}
        color="#e7f070"
        fontSize={16}
      />
      <h4>Days <strong className="yellow">Jueun</strong>'s code</h4>
      <GitHubCalendar
        username="001021"
        blockSize={15}
        blockMargin={5}
        color="#e7f070"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

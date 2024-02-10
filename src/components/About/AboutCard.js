import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vedansh Raghuvanshi </span>
            from <span className="purple"> IIITA</span>
            <br />
            I am currently pursuing my B.Tech. from Indian Institute Of Information Technology Allahabad
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hardwork and Consistency is the key to Success!"{" "}
          </p>
          <footer className="blockquote-footer">Vedansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

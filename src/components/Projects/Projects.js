import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import classfeed from "./classfeed.jpeg";
import talkin from "./Talkin.jpeg";
import notebook from "./notebook.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talkin}
              isBlog={false}
              title="Talkin"
              description="Talkin is a Social Media Android application exclusively for IIIT-A members to interact with other fellow-mates, get regular updates regarding college events, provide mess feedback.
              • Co-Authored frontend in XML, backend in Java utilizing the Firebase Realtime database, Firebase Storage "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classfeed}
              isBlog={false}
              title="Student Feedback Management System"
              description="The system allows students to submit feedback easily and securely through an online portal via ratings and comments, covering various aspects of their college experience
              • The system should provide flexibility to customize feedback forms based on the specific needs of the college. This allows colleges to tailor questions and survey templates to gather feedback on various areas such as courses, faculty, facilities, student services, and more
              • Administrator can monitor feedback submissions, review feedback data, and identify trends or patterns. They collaborate with faculty to analyze the feedback and identify areas for improvement.
              "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notebook}
              isBlog={false}
              title="NoteBook"
              description="Notebook is a CRUD-based website that provides a convenient and effective way to capture and store information, ideas, reminders, to-do lists, and more.
              • Authored frontend using React-JS , Context for state management.
              • Authored backend using Node-JS, develped REST APIs, created routes, used JWT’s for user authentication and MongoDB as database ."
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

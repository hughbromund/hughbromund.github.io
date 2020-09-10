import React, { Component } from "react";

import { TEXT_COLOR } from "../../constants/Constants";

import classes from "./Projects.module.css";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ProjectCard from "./ProjectCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Projects extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>Projects</strong>
          <hr />
        </h1>
        <div className={classes.cards}>
          <Row xs={1} md={2} lg={2} xl={3} className={classes.projectsRow}>
            <Col>
              <ProjectCard
                name="FINEX"
                description="A team based project to build a website that helps track
                  spending and stock information"
                role="For this project, I helped create the initial designs and then
                  worked on the frontend team to bring those designs to life. I
                  specifically worked on the frontend design and functionality
                  of the budgeting feature. Additionally, I took on the task of
                  hosting the website once it was completed."
                techNames={[
                  "React",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                ]}
                techCodes={["react", "js", "node", "html5", "css3-alt", "npm"]}
                repo="https://github.com/hughbromund/FINEX"
                demo="https://finex.money"
              />
            </Col>
            <Col>
              <ProjectCard
                name="StarStats"
                description="An iOS app that displays player stats from the game BrawlStars"
                role="I worked on a number of different components for this project. My first job was building the backend for our app. I built the backend using NodeJS and hosted it in Google Cloud. I then moved on to creating the trophy graphing system and our persistent data system."
                techNames={["Swift", "JavaScript", "node", "Sketch"]}
                techCodes={["swift", "js", "node", "sketch"]}
                repo="https://github.com/BrawlStats-Purdue/BrawlStats"
                awardsNames={["Best Design - 2020 CodePath National Demo Day"]}
                awardsLinks={[
                  "https://blog.codepath.org/codepath-hosts-first-national-virtual-demo-day/",
                ]}
              />
            </Col>
            <Col>
              <ProjectCard
                name="AdventurousSloth"
                description="A web app that helps create an itinerary based on a simple set of questions."
                role="I came up with the initial idea for the website and then worked on the frontend team. I built the home page and the results page using React."
                techNames={[
                  "React",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                  "Tripadvisor API",
                ]}
                techCodes={[
                  "react",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                  "tripadvisor",
                ]}
                repo="https://github.com/hughbromund/AdventurousSloth"
                demo="https://adventurous-sloth-1.ue.r.appspot.com/"
                awardsNames={["3rd Place Overall - Boilermake VII"]}
                awardsLinks={["https://devpost.com/software/adventurous-sloth"]}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

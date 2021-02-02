import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import TextLoop from "react-text-loop";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-scroll";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./HomePage.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <Row>
          <Col sm>
            <span style={{ float: "right" }}>
              <div className={classes.picture}>
                <Image
                  fluid
                  rounded
                  src={require("../../assets/hugh.JPG")}
                ></Image>
              </div>
            </span>
          </Col>
          <Col sm>
            <h3>
              Hi there{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
              , I'm
            </h3>
            <h1>
              <strong>Hugh Bromund</strong>
            </h1>
            <h3>
              I{" "}
              <TextLoop
                children={[
                  "build awesome websites",
                  "go to Purdue University",
                  "compete at Hackathons",
                  "teach programming",
                  "study Computer Science",
                ]}
              ></TextLoop>
            </h3>
            <p style={{ "max-width": "30rem" }}>
              I'm a full-time student studying Computer Science at{" "}
              <i>Purdue University</i>. I have a passion for all things Computer
              Science. I am also a member of <i>Hack the Future</i> where I lead
              a team of 6 to create projects for non-profits near Purdue's
              campus.
            </p>
            <Button variant="primary">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

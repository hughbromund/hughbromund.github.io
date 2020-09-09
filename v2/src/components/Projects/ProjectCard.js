import React, { Component } from "react";

import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
// import Button from "react-bootstrap/Button";

import classes from "./ProjectCard.module.css";

const DEFAULT_ACTIVE_KEY = "role";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: DEFAULT_ACTIVE_KEY };
  }

  render() {
    var list = [];
    console.log(this.props.tech);
    for (var i = 0; i < this.props.tech.length; i++) {
      list.push(
        <div>
          {this.props.tech[i]} | {this.props.tech[i][1]}
        </div>
      );
    }

    return (
      <div>
        <Card className={classes.card}>
          <Card.Body>
            <Card.Title>
              <b>{this.props.name}</b>
            </Card.Title>
            <Card.Subtitle>{this.props.description}</Card.Subtitle>
            {/* <hr /> */}
          </Card.Body>
          <Accordion
            defaultActiveKey={DEFAULT_ACTIVE_KEY}
            onSelect={(e) => {
              console.log(e);
              this.setState({ activeSection: e });
            }}
          >
            <Card className={classes.accordionCard}>
              <Accordion.Toggle
                as={Card.Header}
                className={
                  this.state.activeSection === "role"
                    ? classes.accordionToggleActive
                    : classes.accordionToggle
                }
                eventKey="role"
              >
                <b>My Role</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="role">
                <Card.Body>{this.props.role}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={classes.accordionCard}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="tech"
                className={
                  this.state.activeSection === "tech"
                    ? classes.accordionToggleActive
                    : classes.accordionToggle
                }
              >
                <b>Technologies</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="tech">
                <div>{list}</div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </div>
    );
  }
}

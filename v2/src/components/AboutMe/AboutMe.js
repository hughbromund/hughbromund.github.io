import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./AboutMe.module.css";
import Card from "react-bootstrap/Card";

import ExperienceCard from "../ExperienceCard/ExperienceCard";

export default class AboutMe extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>About Me</strong>
          <hr />
        </h1>
        <div className={classes.inner}>
          <h2>
            <strong>Skills</strong>
          </h2>
        </div>
        <div>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Programming Languages</strong>
              </Card.Title>
              <hr />
            </Card.Body>
          </Card>
        </div>
        <div className={classes.inner}>
          <h2>
            <strong>Outside of Class</strong>
          </h2>
        </div>

        <div className={classes.carousel}>
          <Card className={classes.card}>
            <Carousel interval="5000">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/Boilermake1.JPG")}
                  alt="the Adventurous Sloth Team"
                />
                <Carousel.Caption>
                  <h2>The Adventurous Sloth Team</h2>
                  <p>
                    After competing for 36 hours, our team took home 3rd Place
                    Overall at Boilermake VII
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/Boilermake2.JPG")}
                  alt="the Adventurous Sloth Demo"
                />
                <Carousel.Caption>
                  <h2>Live Demo of Adventurous Sloth</h2>
                  <p>
                    We were one of only a few teams that were invited to demo
                    our product at the end of the Hackathon
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/Boilermake3.jpg")}
                  alt="the Adventurous Sloth judging"
                />
                <Carousel.Caption>
                  <h2>Judging for Boilermake VII</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>
                <b>Boilermake VII</b> | <i>Hackathon</i>
              </Card.Title>
              <Card.Subtitle>West Lafayette, IN</Card.Subtitle>
              <hr />
              <Card.Text>
                I recently had the opportunity to compete at Purdue's largest
                Hackathon, Boilermake VII. This years theme was Hack Your
                Adventure, and so our team created the website Adventurous
                Sloth. The goal of Adventurous Sloth was to allow users to
                answer a simple set of questions and then receive a full travel
                itinerary based upon those choices. Boilermake VII was a great
                experience for me because of how much new material I leanred in
                just 36 hours. I am looking forward to competing in Boilermake
                VIII next year.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h1 className={classes.title}>
          <strong>Education & Experience</strong>
          <hr />
        </h1>
        <div className={classes.inner}>
          <h2>
            <strong>Education</strong>
          </h2>
          <ExperienceCard
            company="Purdue University"
            position="Bachelors of Computer Science Honors"
            location="West Lafayette, IN"
            dates="2022 Graduation"
            about="GPA: 3.72 / 4.00 | Semester Honors and Deans List"
            responsibilities={[
              "Computer Architecture (CS 25000)",
              "Data Structures and Algorithms (CS 25100)",
              "Fundamentals of Computer Science (CS 18200)",
              "Problem Solving and Object-Oriented Programming ( CS 18000)",
              "Programming in C (CS 24000)",
              "Software Engineering I (CS 30700)",
              "Systems Programming (CS 25200)",
              "iOS Development In Swift (CS 49000-iOS)",
            ]}
            responsibilitiesTitle="Coursework"
          />
          <div id="experience">
            <h2>
              <strong>Experience</strong>
            </h2>
            <br />
            <Row
              xs={1}
              sm={1}
              md={2}
              lg={3}
              xl={3}
              className={classes.experienceRow}
            >
              <Col>
                <ExperienceCard
                  company="LincLogix LLC"
                  position="Software Developer Intern"
                  location="Indianapolis, IN"
                  about="Working with the LincLogix Engineering Team for the 2020 summer. Creating applications that help save LincLogix employees time and automate repetitive processes."
                  dates="May 2020 - Present"
                  responsibilities={[
                    "Built data processing and validation tool that automates over 15 hours of work per month with Python",
                    "Built data aggregation web app that saves 5+ hours of work per week with React, NodeJS, and Express",
                    "Modernized company website with new responsive design using React (viewable at LincLogix.com)",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col>
                <ExperienceCard
                  company="Purdue University"
                  location="West Lafayette, IN"
                  position="Teaching Assistant"
                  about="Assisted and helped teach 40+ students in the Fundamentals of C class"
                  dates="Jan. 2020 - May 2020"
                  responsibilities={[
                    "Work with students one-on-one to help them with all aspects of the class",
                    "Grade Code-Standard for student homework submissions",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col>
                <ExperienceCard
                  company="iD Tech Camps"
                  location="West Lafayette, IN"
                  position="Lead Instructor"
                  about="I am the Lead Instructor for iD Camps during the 2019 summer. I worked at Purdue University and University of Alabama Birmingham"
                  dates="May 2019 - July 2019"
                  responsibilities={[
                    "Taught classes focusing on machine learning and artificial intelligence to 100+ students",
                    "Named the best instructor in the “Teaching”, “Leadership”, and “Organization” categories",
                    "Monitored Progress of all students and made sure every student completed the curriculum",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col hidden>
                <ExperienceCard
                  company="Brebeuf Jesuit Preparatory School"
                  location="Indianapolis, IN"
                  position="IT Summer Intern"
                  about="I am the summer intern for my high school's IT department"
                  dates="May 2016 - Aug. 2017"
                  responsibilities={[
                    "Help teachers setup and use new technology in the school",
                    "Run new CAT6 Ethernet cables throughout the building",
                    "Setup and maintain the Brebeuf Jesuit Maker Space",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

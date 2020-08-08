import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./AboutMe.module.css";

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
            <strong>
              <i>Outside of Class</i>
            </strong>
          </h2>
        </div>
        <div className={classes.carousel}>
          <h3>
            <strong>Boilermake VII</strong>
          </h3>
          <p>
            I recently had the opportunity to compete at Purdue's largest
            Hackathon, Boilermake VII. This years theme was Hack Your Adventure,
            and so our team created the website Adventurous Sloth. The goal of
            Adventurous Sloth was to allow users to answer a simple set of
            questions and then receive a full travel itinerary based upon those
            choices. Boilermake VII was a great experience for me because of how
            much new material I leanred in just 36 hours. I am looking forward
            to competing in Boilermake VIII next year.
          </p>
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
                  We were one of only a few teams that were invited to demo our
                  product at the end of the Hackathon
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
        </div>
        <h1 className={classes.title}>
          <strong>Education & Experience</strong>
          <hr />
        </h1>
        <div className={classes.inner}>
          <h2>
            <strong>
              <i>Education</i>
              <span role="img" aria-label="pencil">
                ✏️
              </span>
            </strong>
          </h2>
          <h3>
            <strong>Purdue University</strong>
          </h3>
          <div>
            <span style={{ float: "right" }}>
              <strong>August 2018 - Present</strong>
            </span>
          </div>
          <div>
            <h4>Bachelors of Computer Science Honors</h4>
            <p>
              GPA: 3.72 / 4.00
              <br />
              Semester Honors and Deans List
              <br />
              Completed Classes:
              <br />
              <ul>
                <li>Computer Architecture (CS 25000)</li>
                <li>Data Structures and Algorithms (CS 25100)</li>
                <li>Fundamentals of Computer Science (CS 18200)</li>
                <li>
                  Problem Solving and Object-Oriented Programming ( CS 18000)
                </li>
                <li>Programming in C (CS 24000)</li>
                <li>Software Engineering I (CS 30700) </li>
                <li>Systems Programming (CS 25200)</li>
                <li>iOS Development In Swift (CS 49000-iOS) </li>
              </ul>
            </p>
          </div>
          <div id="experience">
            <h2>
              <strong>
                <i>Experience </i>
                <span role="img" aria-label="Necktie">
                  👔
                </span>
              </strong>
            </h2>
            <h3>
              <strong>Software Developer Intern</strong> {"//"} <i>LincLogix</i>
            </h3>
            <div>
              <span style={{ float: "right" }}>
                <strong>May 2020 - Present</strong>
              </span>
            </div>
            <div>
              <h4>Indianapolis, IN</h4>
              <p>
                I am working with the engineering team at LincLogix during the
                2020 summer.
                <br />
                Responsibilities:
                <ul>
                  <li>
                    Create program that combines data about clients from
                    multiple sources
                  </li>
                  <li>
                    Create web-based interface for compiling client account data
                  </li>
                </ul>
              </p>
            </div>
            <h3>
              <strong>Teaching Assistant</strong> {"//"}{" "}
              <i>Purdue University</i>
            </h3>
            <div>
              <span style={{ float: "right" }}>
                <strong>January 2020 - May 2020</strong>
              </span>
            </div>
            <div>
              <h4>West Lafayette, IN</h4>
              <p>
                I am a Teaching Assistant for the Fundamentals of C course at
                Purdue University
                <br />
                Responsibilities:
                <ul>
                  <li>
                    Work with students one-on-one to help them with all aspects
                    of the class
                  </li>
                  <li>Grade Code-Standard for student homework submissions</li>
                </ul>
              </p>
            </div>
            <h3>
              <strong>Lead Instructor</strong> {"//"} <i>iD Tech Camps</i>
            </h3>
            <div>
              <span style={{ float: "right" }}>
                <strong>May 2019 - July 2019</strong>
              </span>
            </div>
            <div>
              <h4>West Lafayette, IN</h4>
              <p>
                I am the Lead Instructor for iD Camps during the 2019 summer. I
                worked at Purdue University and University of Alabama Birmingham
                <br />
                Responsibilities:
                <ul>
                  <li>
                    Teach high quality classes on Machine Learning, Game Design,
                    Java, and Python
                  </li>
                  <li>
                    Provide a safe environment for up to 50 students a week
                  </li>
                  <li>
                    Monitor Progress of students and make sure every student
                    learned the curriculum
                  </li>
                </ul>
              </p>
            </div>
            <h3>
              <strong>IT Summer Intern</strong> {"//"}{" "}
              <i>Brebeuf Jesuit Preparatory School</i>
            </h3>
            <div>
              <span style={{ float: "right" }}>
                <strong>May 2016 - August 2017</strong>
              </span>
            </div>
            <div>
              <h4>Indianapolis, IN</h4>
              <p>
                I am the summer intern for my high school's IT department
                <br />
                Responsibilities:
                <ul>
                  <li>
                    Help teachers setup and use new technology in the school
                  </li>
                  <li>Run new CAT6 Ethernet cables throughout the building</li>
                  <li>Setup and maintain the Brebeuf Jesuit Maker Space</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        Designed and Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Hugh Bromund
        <br />
        <a href="https://github.com/hughbromund/v2">GitHub Repository</a> -
        Hosted by GitHub Pages
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Video.css";

export default class Video extends Component {
  render() {
    return (
      <div className="Video">
        <p>Componente: Video</p>
        <video controls>
          <source
            src="https://www.w3schools.com/tags/movie.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

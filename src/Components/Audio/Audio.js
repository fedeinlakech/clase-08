import React, { Component } from "react";
import "./Audio.css";
import "./Incas.mp3";

export default class Audio extends Component {
  render() {
    return (
      <div className="Audio">
        <p>Componente: Audio</p>
        <audio controls>
          <source
            src="https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3"
            type="audio/mpeg"
          />
          <source
            src="https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3"
            type="audio/ogg"
          />
        </audio>
      </div>
    );
  }
}

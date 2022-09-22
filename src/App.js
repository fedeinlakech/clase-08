import logo from "./Tigre-Liverpool.jpg";
import "./App.css";
import List from "./Components/List/List";
import Button from "./Components/Button/Button.js";
import Video from "./Components/Video/Video";
import Audio from "./Components/Audio/Audio";

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TIGRE y LIVERPOOL, las maravillas del mundo.</p>
        <a
          className="App-link"
          href="https://catigre.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tigre
        </a>
        <a
          className="App-link"
          href="https://liverpoolfc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liverpool
        </a>
      </header>
      <List />
      <Video />
      <Audio />
    </div>
  );
}

export default App;

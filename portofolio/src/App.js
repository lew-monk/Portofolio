import "./App.css";
import Container from "./components/container";

function App() {
  return (
    <div className="App">
      <img
        src={window.location.origin + "/assets/image/Artboard 1.png"}
        alt="background"
        className="back-svg"
      />
      <Container />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import CollectableCard from "./components/CollectableCard/CollectableCard";
import ghostImage from "./img/ghost.png";
import cupImage from "./img/cup.png";

function App() {
  return (
    <div className="App">
      <CollectableCard name="Spooky" date={new Date()} image={ghostImage} />
      <CollectableCard name="Cup" date={new Date()} image={cupImage} />
    </div>
  );
}

export default App;

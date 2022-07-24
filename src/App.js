import "./App.css";
import Pathfinder from "./components/Pathfinder";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  // Define UI states
  const [activeTool, setActiveTool] = useState(null);

  // Define UI functions

  const selectTool = (e) => {
    setActiveTool(e.target.id);
  };

  const clearToolSelection = () => {
    setActiveTool(null);
  };

  return (
    <div className="App">
      <Navigation selectTool={selectTool} />
      <Pathfinder
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        clearToolSelection={clearToolSelection}
      />
    </div>
  );
}

export default App;

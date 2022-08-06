import "./App.css";
import Pathfinder from "./components/Pathfinder";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  // Define UI states
  const [activeTool, setActiveTool] = useState(null);
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);

  // Define UI functions

  const selectTool = (e) => {
    setActiveTool(e.target.id);
  };

  const clearToolSelection = () => {
    setActiveTool(null);
  };

  return (
    <div className="App">
      <Navigation
        selectTool={selectTool}
        setStartNode={setStartNode}
        setEndNode={setEndNode}
      />
      <Pathfinder
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        clearToolSelection={clearToolSelection}
        startNode={startNode}
        endNode={endNode}
        setStartNode={setStartNode}
        setEndNode={setEndNode}
      />
    </div>
  );
}

export default App;

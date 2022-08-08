import "./App.css";
import Pathfinder from "./components/Pathfinder";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  // Define UI states
  const [activeTool, setActiveTool] = useState();
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);
  const [algoSelected, setAlgoSelected] = useState("Breadth First Search");
  const [searchSpeed, setSearchSpeed] = useState("Normal");
  const [run, setRun] = useState(0);

  // Define UI functions
  const startSearch = () => {
    setRun((prevRun) => prevRun + 1);
    console.log(run);
  };
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
        setSearchSpeed={setSearchSpeed}
        setAlgoSelected={setAlgoSelected}
        startSearch={startSearch}
      />
      <Pathfinder
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        clearToolSelection={clearToolSelection}
        startNode={startNode}
        endNode={endNode}
        setStartNode={setStartNode}
        setEndNode={setEndNode}
        algoSelected={algoSelected}
        searchSpeed={searchSpeed}
        run={run}
      />
    </div>
  );
}

export default App;

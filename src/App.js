import "./App.css";
import Pathfinder from "./components/Pathfinder";
import Navigation from "./components/Navigation/Navigation";
import { useState, useEffect } from "react";

function App() {
  // Define UI states
  const [activeTool, setActiveTool] = useState();
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);
  const [algoSelected, setAlgoSelected] = useState("Breadth First Search");
  const [searchSpeed, setSearchSpeed] = useState("Normal");
  const [run, setRun] = useState(0);
  const [reset, setRest] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [cols, setCols] = useState();

  // Define UI functions
  const startSearch = () => {
    setRun((prevRun) => prevRun + 1);
  };

  const resetGrid = () => {
    setRest((prevRest) => prevRest + 1);
  };

  const selectTool = (e) => {
    setActiveTool(e.target.id);
  };

  const clearToolSelection = () => {
    setActiveTool(null);
  };

  const widthOfScreen = () => {
    setWidth(window.innerWidth);
  };

  // useEffect for screen width on resize
  useEffect(() => {
    window.addEventListener("resize", widthOfScreen);
    return () => window.removeEventListener("resize", widthOfScreen);
  }, [width]);

  useEffect(() => {
    if (width < 1000) {
      let colNum = Math.floor((width - 100) / 25 - 1);
      setCols(colNum);
    } else {
      setCols(40);
    }
  }, [cols, width]);

  return (
    <div className="App">
      <Navigation
        selectTool={selectTool}
        setStartNode={setStartNode}
        setEndNode={setEndNode}
        setSearchSpeed={setSearchSpeed}
        setAlgoSelected={setAlgoSelected}
        startSearch={startSearch}
        resetGrid={resetGrid}
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
        width={width}
        cols={cols}
        reset={reset}
      />
    </div>
  );
}

export default App;

import "./App.css";
import Pathfinder from "./components/Pathfinder";
import Navigation from "./components/Navigation/Navigation";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  // Define UI states
  const [activeTool, setActiveTool] = useState();
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);
  const [algoSelected, setAlgoSelected] = useState("Breadth First Search");
  const [searchSpeed, setSearchSpeed] = useState("Normal");
  const [run, setRun] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [cols, setCols] = useState();
  const [speed, setSpeed] = useState();

  // Define UI functions
  const startSearch = () => {
    setRun((prevRun) => prevRun + 1);
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

  const resetGrid = () => {
    window.location.reload(true);
  };

  // useEffect for screen width on resize
  useEffect(() => {
    window.addEventListener("resize", widthOfScreen);
    return () => window.removeEventListener("resize", widthOfScreen);
  }, [width]);

  useEffect(() => {
    if (searchSpeed === "Slow") {
      setSpeed(180);
    }

    if (searchSpeed === "Normal") {
      setSpeed(150);
    }

    if (searchSpeed === "Fast") {
      setSpeed(110);
    }
  }, [speed, searchSpeed]);

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
      <div className="flex-wrapper">
        <Card
          classType={"how-to-use"}
          title={"Instructions:"}
          type={"info-card"}
          inputs={[
            "Step 1: Select flag icon",
            "Step 2: Double click square to place start node",
            "Step 3: Single click square to place end node",
            "Step 4 Optional : select wall icon to draw wall",
            "Step 5: Select search settings and Run",
            "Step 6: Press the reset button and repeat",
          ]}
        />
      </div>
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
        speed={speed}
      />
      <div className="flex-wrapper">
        <Card
          classType={"how-to-use"}
          title={"Hints & Tips:"}
          type={"info-card"}
          inputs={[
            "Breadth First Search BFS : Is a graph traversal method that uses the queue data structure.The BFS search in this sandbox shows the traversal to the target node, but not the path. BFS is used to prove I any path exists between nodes",
            "Depth First Search DFS : Is a graph traversal method that uses the stack data structure.The DFS search in this sandbox shows the traversal to the target node, but not the path.BFS is used to prove I any path exists between nodes",
            "Dijkstra’s Search : Is a graph search algorithm that uses minimisation to find the optimal path. It is a greedy algorithm and does not work with negative weights.",
          ]}
        />
      </div>
    </div>
  );
}

export default App;

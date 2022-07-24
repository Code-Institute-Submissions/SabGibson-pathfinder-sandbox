// import modules and components
import { useEffect, useState } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";

// variables that define grid size
const rows = 20;
const cols = 50;

// Pathfinder state functionless component that will be main interface for app
const Pathfinder = (props) => {
  // Define React state hooks for grid and mouse input
  const [activeGrid, setActiveGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState([]);
  const [startNode, setStartNode] = useState("id-0-0");
  const [endNode, setEndNode] = useState(null);

  // unload state varivabels form props
  const activeTool = props.activeTool;
  const setActiveTool = props.setActiveTool;

  // node object constructor
  function newNode(col, row) {
    this.xVal = col;
    this.yVal = row;
    this.isStart = startNode === `id-${col}-${row}`;
    this.isEnd = false;
    this.isWall = false;
    this.isVisited = false;
  }

  // gridInit() function creates 2D array and populates with node objects
  const gridInit = () => {
    const grid = [];
    for (let i = 0; i < cols; i++) {
      const currentRow = [];
      for (let j = 0; j < rows; j++) {
        currentRow.push(new newNode(i, j));
      }
      grid.push(currentRow);
    }
    setMouseIsPressed(false);
    setActiveGrid(grid);
  };

  // Effect hook for init of Pathfinder (gird) component
  useEffect(() => {
    gridInit();
  }, []);

  // Pathfinder methods for interaction with grid

  const setStartTermialNodes = (e) => {
    setStartNode(e.target.id);
  };

  // function and variable to set termial nodes

  // Define return variable for the Pathfinder using Node component
  const functionalGrid = (
    <div className="sb-grid" onClick={setStartTermialNodes}>
      {activeGrid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => {
              return (
                <Node
                  key={nodeIndex}
                  node={node}
                  startNode={startNode}
                  endNode={endNode}
                  activeTool={activeTool}
                  setActiveTool={setActiveTool}
                  setStartTermialNodes={setStartTermialNodes}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  // Return jsx to  component in app interface
  return <div className="sandbox">{functionalGrid}</div>;
};

export default Pathfinder;

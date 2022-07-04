// import modules and components
import { useEffect, useState } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";

// variables that define grid size
const rows = 20;
const cols = 50;

// node object constructor
function newNode(col, row) {
  this.xVal = col;
  this.yVal = row;
  this.isStart = false;
  this.isEnd = false;
  this.isWall = false;
  this.isVisited = false;
}

// Pathfinder state functionless component that will be main interface for app
const Pathfinder = () => {
  // gridInit() function creates 2D array and populates with nodes
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

  // Define React state hooks for grid and mouse input
  const [activeGrid, setActiveGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);

  // Define effect hook of init of Pathfinder (gird) component
  useEffect(() => {
    gridInit();
  }, []);

  // Pathfinder methods for interaction with grid

  // makeWallStart - function for starting new wall nodes
  const makeWallStart = (node) => {
    const newGrid = activeGrid.slice();
    if (node.isWall === false) {
      node.isWall = true;
      newGrid[node.xVal][node.yVal] = node;
      setActiveGrid(newGrid);
      setMouseIsPressed(true);
    }
  };

  const makeWallConti = (node) => {
    const newGrid = activeGrid.slice();
    if (mouseIsPressed && node.isWall === false) {
      node.isWall = true;
      newGrid[node.xVal][node.yVal] = node;
      setActiveGrid(newGrid);
    }
  };

  const delWallStart = (node) => {
    const newGrid = activeGrid.slice();
    node.isWall = false;
    newGrid[node.xVal][node.yVal] = node;
    setActiveGrid(newGrid);
    setMouseIsPressed(true);
  };

  const deleWallConti = (node) => {
    const newGrid = activeGrid.slice();
    if (mouseIsPressed) {
      node.isWall = false;
      newGrid[node.xVal][node.yVal] = node;
      setActiveGrid(newGrid);
    }
  };

  const editEnd = () => {
    setMouseIsPressed(false);
  };

  const startEndSelector = (node) => {
    if (startNode == null && endNode == null) {
      node.isStart = true;
      node.isWall = false;
      setStartNode(node);
    } else if (endNode == null) {
      node.isEnd = true;
      node.isWall = false;
      setEndNode(node);
    } else if (startNode && endNode) {
      node.isStart = false;
      node.isWall = false;
      setStartNode(null);
    } else {
      node.isEnd = false;
      node.isWall = false;
      setEndNode(null);
    }

    const newGrid = activeGrid.slice();
    newGrid[node.xVal][node.yVal] = node;

    setActiveGrid(newGrid);
  };

  // Define return variable for the Pathfinder using Node component
  const functionalGrid = (
    <div className="sb-grid">
      {activeGrid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => {
              return (
                <Node
                  key={nodeIndex}
                  node={node}
                  makeWallStart={makeWallStart}
                  makeWallConti={makeWallConti}
                  delWallStart={delWallStart}
                  deleWallConti={deleWallConti}
                  editEnd={editEnd}
                  startEndSelector={startEndSelector}
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

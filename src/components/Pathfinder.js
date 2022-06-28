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

  // Define effect hook of init of Pathfinder (gird) component
  useEffect(() => {
    gridInit();
  }, []);

  // Pathfinder methods for interaction with grid
  const functionTester = (node) => {
    console.log(`ID${node.xVal}-${node.yVal}`);
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
                  mouseIsPressed={mouseIsPressed}
                  functionTester={functionTester}
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

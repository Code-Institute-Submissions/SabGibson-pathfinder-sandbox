import { useEffect, useState } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";

const rows = 20;
const cols = 50;

function newNode(col, row) {
  this.xVal = col;
  this.yVal = row;
  this.isStart = false;
  this.isEnd = false;
  this.isWall = false;
  this.isVisited = false;
}

const Pathfinder = () => {
  const gridInit = () => {
    const grid = [];
    for (let i = 0; i < cols; i++) {
      const currentRow = [];
      for (let j = 0; j < rows; j++) {
        currentRow.push(new newNode(i, j));
      }
      grid.push(currentRow);
    }
    setActiveGrid(grid);
  };

  const [activeGrid, setActiveGrid] = useState([]);
  //   const [mouseIsPressed, setMouseIsPressed] = useState(false);
  useEffect(() => {
    gridInit();
  }, []);

  const functionalGrid = (
    <div className="sb-grid">
      {activeGrid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => {
              console.log(node);
              return <Node key={nodeIndex} node={node} />;
            })}
          </div>
        );
      })}
    </div>
  );

  return <div className="sandbox">{functionalGrid}</div>;
};

export default Pathfinder;

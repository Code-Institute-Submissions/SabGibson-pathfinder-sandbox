import { useEffect, useState } from "react";

const rows = 20;
const cols = 50;

function newNode(row, col) {
  this.x = row;
  this.y = col;
  this.isStart = false;
  this.isEnd = false;
  this.isWall = false;
  this.isVisited = false;
}

const Pathfinder = () => {
  const gridInit = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const currentRow = [];
      for (let j = 0; j < cols; j++) {
        currentRow.push(newNode(row, col));
      }

      grid.push(currentRow);
    }
    setActiveGrid(grid);
  };
  const [activeGrid, setActiveGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  useEffect(() => {
    gridInit();
  }, []);

  const functionalGrid = (
    <div>
      {activeGrid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => {
              return <Node key={nodeIndex} prop={node} />;
            })}
          </div>
        );
      })}
    </div>
  );

  return <div className="pathfinder">{functionalGrid}</div>;
};

export default Pathfinder;

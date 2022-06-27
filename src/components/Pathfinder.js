import { useState } from "react";

const rows = 20;
const cols = 50;

function newNode(row, col) {
  this.x = row;
}

const Pathfinder = () => {
  const [Grid, setGrid] = useState([]);

  const gridInit = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const currentRow = [];
      for (let j = 0; j < cols; j++) {
        currentRow.push(newNode(row, col));
      }

      grid.push(currentRow);
    }
  };

  return <div className="pathfinder"></div>;
};

export default Pathfinder;

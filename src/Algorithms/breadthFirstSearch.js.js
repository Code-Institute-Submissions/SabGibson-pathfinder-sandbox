import { rows, cols } from "./components/Pathfinder";

// breadth first algo returns list of nodes in path to target if possible
const breadthFirst = (start, target, grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [start];
  const path = [];

  while (queue) {
    currNode = queue.shift();

    if (currNode === target) {
      path.append(currNode);
      return path;
    }
  }

  return path;
};

const gridInit = () => {
  const grid = [];
  for (let i = 0; i < cols; i++) {
    const currentRow = [];
    for (let j = 0; j < rows; j++) {
      currentRow.push(new nodeObject(i, j));
    }
    grid.push(currentRow);
  }
  console.log(grid);
  setMouseIsPressed(false);
  setActiveGrid(grid);
};

gridInit();

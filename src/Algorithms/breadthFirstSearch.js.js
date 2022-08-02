import { rows, cols } from "./components/Pathfinder";

const isValid = (x, y) => {
  if (0 < x <= cols && 0 < y <= rows) {
    return true;
  } else {
    return false;
  }
};

// breadth first algo returns list of nodes in path to target if possible
const breadthFirst = (start, target) => {
  const queue = [start];
  const path = [];

  while (queue) {
    currNode = queue.shift();

    if (currNode === target) {
      path.append(currNode);
      return path;
    }

    top;
    right;
    left;
    bottom;
  }

  return path;
};

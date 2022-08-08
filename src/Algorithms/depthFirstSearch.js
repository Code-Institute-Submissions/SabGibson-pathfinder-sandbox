export const depthFirst = function (start, target) {
  const stack = [start];
  const path = [];

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (currNode.isVisited || currNode.isWall) {
      continue;
    }

    if (currNode === target) {
      return path;
    }
    currNode.isVisited = true;
    if (!(currNode.isStart || currNode.isEnd)) path.push(currNode);
    for (const neighbour of currNode.neighbours) {
      if (!neighbour.isVisited && !(neighbour in stack) && !neighbour.isWall) {
        stack.push(neighbour);
      }
    }
  }

  return path;
};

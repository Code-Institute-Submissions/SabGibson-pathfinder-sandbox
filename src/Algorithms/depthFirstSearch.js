export const depthFirst = function (start, target) {
  start.isVisited = true;
  target.isVisited = true;
  const stack = [start];
  const path = [];

  while (stack.length > 0) {
    const currNode = queue.pop();
    if (currNode.isVisited) {
      continue;
    }

    if (currNode === target) {
      return path;
    }
    currNode.isVisited = true;
    path.push(currNode);
    for (const neighbour of currNode.neighbours) {
      if (!neighbour.isVisited && !(neighbour in queue)) {
        queue.push(neighbour);
      }
    }
  }

  return path;
};

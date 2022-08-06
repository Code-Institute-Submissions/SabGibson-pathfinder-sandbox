export const breadthFirst = function (start, target) {
  const queue = [start];
  const path = [];

  while (queue.length > 0) {
    const currNode = queue.shift();
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

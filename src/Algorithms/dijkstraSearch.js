export const dijkstraSearch = (start, target, grid) => {
  // step 1 get all nodes in grid
  const visitedInOrder = [];
  start.distance = 0;
  const allNodes = getAllNodes(grid);

  // step 2 preform relaxation for all nodes in graph if v > u + cost frm start for all unvisited neighbours
  while (!!allNodes.length) {
    sortNodes(allNodes);
    const closestNode = allNodes.shift();

    if (closestNode === target) break;

    if (closestNode.distance === Infinity) break;

    if (closestNode.isWall) continue;
    closestNode.isVisited = true;

    if (closestNode !== start || closestNode !== target)
      visitedInOrder.push(closestNode);
    relaxation(closestNode);
  }

  const shortestPath = getShortestPath(target);
  return [visitedInOrder, shortestPath];
};

// all nodes from grid into list
const getAllNodes = (grid) => {
  const nodes = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      nodes.push(grid[i][j]);
    }
  }

  return nodes;
};

const relaxation = (node) => {
  for (const neighbour of node.neighbours) {
    if (neighbour.isVisited === false) {
      neighbour.distance = node.distance + 1;
      neighbour.prevNode = node;
    }
  }
};

const sortNodes = (nodes) => {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const getShortestPath = (target) => {
  const shortestPath = [];
  let currNode = target;

  while (!(currNode.prevNode === null)) {
    shortestPath.unshift(currNode);
    currNode = currNode.prevNode;
  }
  return shortestPath;
};

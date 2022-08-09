// import modules and components
import { useEffect, useState } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";
import { breadthFirst } from "../Algorithms/breadthFirstSearch.js";
import { depthFirst } from "../Algorithms/depthFirstSearch";
import { aStarSearch } from "../Algorithms/aStarSearch";
import { dijkstraSearch } from "../Algorithms/dijkstraSearch";

const rows = 20;

// Pathfinder state functionless component that will be main interface for app
const Pathfinder = (props) => {
  // Define React state hooks for grid and mouse input
  const [activeGrid, setActiveGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState([]);
  const [nodeToAnimate, setNodeToAnimate] = useState(null);
  const [pathNodeToAnimate, setPathNodeToAnimate] = useState(null);

  // unload state varivabels form props
  const activeTool = props.activeTool;
  const setActiveTool = props.setActiveTool;
  const clearToolSelection = props.clearToolSelection;
  const startNode = props.startNode;
  const setStartNode = props.setStartNode;
  const endNode = props.endNode;
  const setEndNode = props.setEndNode;
  const algoSelected = props.algoSelected;
  const searchSpeed = props.searchSpeed;
  const run = props.run;
  const cols = props.cols;
  const reset = props.reset;
  // variables that define grid size

  // Effect hook for init of Pathfinder (gird) component
  useEffect(() => {
    // node object constructor
    function nodeObject(col, row) {
      this.xVal = col;
      this.yVal = row;
      this.isStart = false;
      this.isEnd = false;
      this.isWall = false;
      this.isVisited = false;
      this.isPath = false;
      this.distance = Infinity;
      this.prevNode = null;
      this.additionalWeight = 0;
      this.neighbours = [];
      this.addNeighbours = (grid) => {
        let i = this.xVal;
        let j = this.yVal;

        const rows = grid.length;
        const cols = grid[0].length;

        if (i + 1 < rows) {
          this.neighbours.push(grid[i + 1][j]);
        }

        if (j + 1 < cols) {
          this.neighbours.push(grid[i][j + 1]);
        }

        if (0 < i) {
          this.neighbours.push(grid[i - 1][j]);
        }

        if (0 < j) {
          this.neighbours.push(grid[i][j - 1]);
        }
      };
    }

    // gridInit() function creates 2D array and populates with node objects
    const gridInit = () => {
      const grid = [];
      for (let i = 0; i < cols; i++) {
        const currentRow = [];
        for (let j = 0; j < rows; j++) {
          currentRow.push(new nodeObject(i, j));
        }
        grid.push(currentRow);
      }
      return grid;
    };

    const addNodeNeighbours = (grid) => {
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          grid[i][j].addNeighbours(grid);
        }
      }
    };

    const startGrid = gridInit();
    addNodeNeighbours(startGrid);
    setMouseIsPressed(false);
    setActiveGrid(startGrid);
    clearToolSelection();
  }, [cols, reset]);

  // Pathfinder methods for interaction with grid
  useEffect(() => {
    const findShowPath = () => {
      if (algoSelected === "Breadth First Search") {
        const visitedNodesInOrder = breadthFirst(startNode, endNode);

        visitedNodesInOrder.forEach((node, index) => {
          setTimeout(() => {
            setNodeToAnimate(node);
          }, 150 * index);
        });
      }
      if (algoSelected === "Depth First Search") {
        const visitedNodesInOrder = depthFirst(startNode, endNode);

        visitedNodesInOrder.forEach((node, index) => {
          setTimeout(() => {
            setNodeToAnimate(node);
          }, 150 * index);
        });
      }
      if (algoSelected === "A* Search Algorith") {
        console.log("A* to be added");
      }
      if (algoSelected === "Dijkstra's Search Algorithm") {
        const [visitedNodesInOrder, shortestPath] = dijkstraSearch(
          startNode,
          endNode,
          activeGrid
        );

        visitedNodesInOrder.forEach((node, index) => {
          setTimeout(() => {
            setNodeToAnimate(node);
          }, 150 * index);
        });

        setTimeout(() => {
          shortestPath.forEach((node, index) => {
            setTimeout(() => {
              setPathNodeToAnimate(node);
            }, 100 * index);
          });
        }, 150 * visitedNodesInOrder.length);
      }
    };

    if (startNode && endNode && activeTool === "play-button") {
      findShowPath();
      clearToolSelection();
    }
  }, [
    run,
    startNode,
    endNode,
    activeTool,
    clearToolSelection,
    activeGrid,
    algoSelected,
    searchSpeed,
  ]);

  //setTermialNodes function allows users to set start and end node
  let terminalType = true;
  const setTermialNodes = (e) => {
    if (activeTool === "place-start-end-button" && terminalType) {
      const nodeCoords = e.target.id.split("-");
      const newGrid = activeGrid.slice();
      const targetNode = newGrid[nodeCoords[1]][nodeCoords[2]];
      // set prev start node to false
      if (startNode) {
        newGrid[startNode.xVal][startNode.yVal].isStart = false;
      }

      targetNode.isStart = true;
      setStartNode(targetNode);
    } else if (
      activeTool === "place-start-end-button" &&
      terminalType === false
    ) {
      const nodeCoords = e.target.id.split("-");
      const newGrid = activeGrid.slice();
      const targetNode = newGrid[nodeCoords[1]][nodeCoords[2]];
      // set prev end node to false
      if (endNode) {
        newGrid[endNode.xVal][endNode.yVal].isEnd = false;
      }
      targetNode.isEnd = true;
      setEndNode(targetNode);
      setMouseIsPressed(false);
      clearToolSelection();
    }
    terminalType = !terminalType;
  };

  const endDrag = () => {
    clearToolSelection();
    setMouseIsPressed(false);
  };

  // variable to modify componant class based on activeTool status
  const activetoolClassMod = activeTool ? "active-tool" : "";
  // Define return variable for the Pathfinder using Node component
  const functionalGrid = (
    <div className={`sb-grid ${activetoolClassMod}`} onClick={setTermialNodes}>
      {activeGrid.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => {
              return (
                <Node
                  key={nodeIndex}
                  node={node}
                  startNode={startNode}
                  endNode={endNode}
                  activeTool={activeTool}
                  setActiveTool={setActiveTool}
                  mouseIsPressed={mouseIsPressed}
                  setMouseIsPressed={setMouseIsPressed}
                  endDrag={endDrag}
                  nodeToAnimate={nodeToAnimate}
                  pathNodeToAnimate={pathNodeToAnimate}
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

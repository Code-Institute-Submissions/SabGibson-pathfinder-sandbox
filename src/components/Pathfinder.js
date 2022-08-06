// import modules and components
import { useEffect, useState } from "react";
import "./Pathfinder.css";
import Node from "./Node/Node";

// variables that define grid size
const rows = 20;
const cols = 50;

// Pathfinder state functionless component that will be main interface for app
const Pathfinder = (props) => {
  // Define React state hooks for grid and mouse input
  const [activeGrid, setActiveGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState([]);
  const [startNode, setStartNode] = useState();
  const [endNode, setEndNode] = useState();

  // unload state varivabels form props
  const activeTool = props.activeTool;
  const setActiveTool = props.setActiveTool;
  const clearToolSelection = props.clearToolSelection;

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
      this.neighbours = [];
      this.addNeighbours = (grid) => {
        let i = this.xVal;
        let j = this.yVal;

        const rows = grid.length;
        const cols = grid[0].length;

        if (0 < i) {
          this.neighbours.push(grid[i - 1][j]);
        }
        if (0 < j) {
          this.neighbours.push(grid[i][j - 1]);
        }
        if (i + 1 < rows) {
          this.neighbours.push(grid[i + 1][j]);
        }
        if (j + 1 < cols) {
          this.neighbours.push(grid[i][j + 1]);
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
  }, []);

  // Pathfinder methods for interaction with grid

  //setTermialNodes function allows users to set start and end node
  let terminalType = true;
  const setTermialNodes = (e) => {
    if (activeTool === "place-start-end-button" && terminalType) {
      const nodeCoords = e.target.id.split("-");
      const newGrid = activeGrid.slice();
      const targetNode = newGrid[nodeCoords[1]][nodeCoords[2]];

      targetNode.isStart = true;
      setStartNode(targetNode);
    } else if (
      activeTool === "place-start-end-button" &&
      terminalType === false
    ) {
      const nodeCoords = e.target.id.split("-");
      const newGrid = activeGrid.slice();
      const targetNode = newGrid[nodeCoords[1]][nodeCoords[2]];

      targetNode.isEnd = true;
      setEndNode(targetNode);
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

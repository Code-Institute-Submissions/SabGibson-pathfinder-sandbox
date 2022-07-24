import { useEffect } from "react";
import { useState } from "react";
import "./Node.css";
const Node = (props) => {
  // extract props
  const params = props.node;
  const [isStart, setIsStart] = useState(params.isStart);
  const [isEnd, setIsEnd] = useState(params.isEnd);
  const [isWall, setIsWall] = useState(params.isWall);
  const isVisited = params.isVisited;
  const xVal = params.xVal;
  const yVal = params.yVal;
  const startNode = props.startNode;
  const endNode = props.endNode;
  const setMouseIsPressed = props.setMouseIsPressed;
  const mouseIsPressed = props.mouseIsPressed;
  const activeTool = props.activeTool;
  const setActiveTool = props.setActiveTool;

  // Define classes for node classification
  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";

  // Effect hooks for updating grid post init

  // Use effect is used to update node components
  useEffect(() => {
    startReloadNode();
  }, [startNode]);

  useEffect(() => {
    endReloadNode();
  }, [endNode]);

  //Define on node interaction methods

  // startReloadNode sets node isStart state in useEffect hook
  const startReloadNode = () => {
    setIsStart(startNode === `id-${xVal}-${yVal}`);
  };
  // endReloadNode sets node isEnd state in useEffect hook
  const endReloadNode = () => {
    setIsEnd(endNode === `id-${xVal}-${yVal}`);
  };

  const placeDeleteWallStart = () => {
    if (activeTool === "make-wall-button") {
      setIsWall(true);
      setMouseIsPressed(true);
    } else if (activeTool === "delete-wall-button") {
      setIsWall(false);
      setMouseIsPressed(true);
    }
  };

  const placeDeleteWallOnEnter = () => {
    if (mouseIsPressed && activeTool === "make-wall-button") {
      setIsWall(true);
    } else if (mouseIsPressed && activeTool === "delete-wall-button") {
      setIsWall(false);
    }
  };

  const endDrag = () => {
    setActiveTool(null);
    setMouseIsPressed(false);
  };

  const onMouseDown = () => {
    placeDeleteWallStart();
  };

  const onMouseEnter = (e) => {
    placeDeleteWallOnEnter();
  };

  const onMouseUp = (e) => {
    endDrag();
  };

  const ondblClick = () => {};

  // Return Jsx node component
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      id={`id-${xVal}-${yVal}`}
    ></div>
  );
};

export default Node;

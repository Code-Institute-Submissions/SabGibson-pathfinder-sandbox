import { useEffect } from "react";
import { useState } from "react";
import "./Node.css";
const Node = ({
  node,
  startNode,
  endNode,
  activeTool,
  mouseIsPressed,
  setMouseIsPressed,
  endDrag,
}) => {
  // Define states
  const [isStart, setIsStart] = useState(node.isStart);
  const [isEnd, setIsEnd] = useState(node.isEnd);
  const [isWall, setIsWall] = useState(node.isWall);
  const [isVisited, setIsVisited] = useState(node.isVisited);

  // Define classes for node classification
  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";

  // Effect hooks for updating grid post init

  // Use effect is used to update node components
  useEffect(() => {
    const startReloadNode = () => {
      // startReloadNode sets node isStart state in useEffect hook
      setIsStart(startNode === node);
    };
    startReloadNode();
  }, [startNode, node]);

  useEffect(() => {
    // endReloadNode sets node isEnd state in useEffect hook

    const endReloadNode = () => {
      setIsEnd(endNode === node);
    };
    endReloadNode();
  }, [endNode, node]);

  //Define on node interaction methods

  const placeDeleteWallStart = () => {
    if (activeTool === "make-wall-button") {
      // console.log(node);
      node.isWall = true;
    } else if (activeTool === "delete-wall-button") {
      node.isWall = false;
    }
    setIsWall(node.isWall);
    setMouseIsPressed(true);
  };

  const placeDeleteWallOnEnter = (e) => {
    if (mouseIsPressed && activeTool === "make-wall-button") {
      setIsWall(true);
    } else if (mouseIsPressed && activeTool === "delete-wall-button") {
      setIsWall(false);
    }
  };

  const onMouseDown = () => {
    placeDeleteWallStart();
  };

  const onMouseEnter = (e) => {
    placeDeleteWallOnEnter();
  };

  const onMouseUp = (e) => {
    if (mouseIsPressed && activeTool === "make-wall-button") {
      endDrag();
    } else if (mouseIsPressed && activeTool === "delete-wall-button") {
      endDrag();
    }
  };

  // Return Jsx node component
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      id={`id-${node.xVal}-${node.yVal}`}
    ></div>
  );
};

export default Node;

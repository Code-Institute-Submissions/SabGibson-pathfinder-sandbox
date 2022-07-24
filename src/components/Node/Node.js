import { useEffect } from "react";
import { useState } from "react";
import "./Node.css";
const Node = (props) => {
  // extract props
  const params = props.node;
  const [isStart, setIsStart] = useState(params.isStart);
  const isEnd = params.isEnd;
  const isWall = params.isWall;
  const isVisited = params.isVisited;
  const xVal = params.xVal;
  const yVal = params.yVal;
  const setStartTermialNodes = props.setStartTermialNodes;
  const startNode = props.startNode;

  // Define classes for node classification
  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";

  // Effect hook for updating grid post init
  useEffect(() => {
    reloadNode();
  }, [startNode]);

  //Define on node interaction methods

  const reloadNode = () => {
    setIsStart(startNode == `id-${xVal}-${yVal}`);
    console.log(`changed value ${xVal}-${yVal}`);
    console.log(startNode);
  };

  const onMouseClick = () => {};

  const onMouseEnter = (e) => {};

  const onMouseUp = (e) => {};

  const ondblClick = () => {};

  // Return Jsx node component
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      id={`id-${xVal}-${yVal}`}
      onClick={onMouseClick}
    ></div>
  );
};

export default Node;

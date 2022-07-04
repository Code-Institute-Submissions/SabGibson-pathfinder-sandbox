import "./Node.css";
const Node = (props) => {
  // Parameters from prop variable
  const params = props.node;
  const isStart = params.isStart;
  const isEnd = params.isEnd;
  const isWall = params.isWall;
  const isVisited = params.isVisited;
  const xVal = params.xVal;
  const yVal = params.yVal;

  // unload methods
  const makeWallStart = props.makeWallStart;
  const makeWallConti = props.makeWallConti;
  const delWallStart = props.delWallStart;
  const deleWallConti = props.deleWallConti;
  const editEnd = props.editEnd;
  const startEndSelector = props.startEndSelector;

  // Define classes for node classification
  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";

  // Define node methods for interaction with grid
  const onMouseDown = (e) => {
    if (e.altKey) {
      delWallStart(params);
    } else {
      makeWallStart(params);
    }
  };

  const onMouseEnter = (e) => {
    if (e.altKey) {
      deleWallConti(params);
    } else {
      makeWallConti(params);
    }
  };

  const onMouseUp = (e) => {
    editEnd(params);
  };

  const ondblClick = () => {
    startEndSelector(params);
  };

  // Return Jsx node component
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      id={`id-${xVal}-${yVal}`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      onClick={ondblClick}
    ></div>
  );
};

export default Node;

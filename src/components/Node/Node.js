import "./Node.css";
const Node = (props) => {
  const params = props.prop;
  const isStart = params.isStart;
  const isEnd = params.isEnd;
  const isWall = params.isWall;
  const isVisited = params.isVisited;
  const xVal = params.x;
  const yVal = params.y;

  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      id={`id-${xVal}-${yVal}`}
    ></div>
  );
};

export default Node;

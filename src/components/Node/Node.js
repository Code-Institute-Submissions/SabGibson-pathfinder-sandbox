import "./Node.css";
const Node = (props) => {
  // Decant parameters from prop variable
  const params = props.node;
  const isStart = params.isStart;
  const isEnd = params.isEnd;
  const isWall = params.isWall;
  const isVisited = params.isVisited;
  const xVal = params.xVal;
  const yVal = params.yVal;

  const functionTester = props.functionTester;

  // Define classes for node classification
  const terminalClass = isStart ? "start" : isEnd ? "end" : "";
  const wallClass = isWall ? "wall" : "";
  const visitedClass = isVisited ? "visited" : "";

  // Define node methods for interaction with grid
  const testFunc = () => {
    functionTester(params);
  };
  // Return Jsx node component
  return (
    <div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      id={`id-${xVal}-${yVal}`}
      onClick={testFunc}
    ></div>
  );
};

export default Node;

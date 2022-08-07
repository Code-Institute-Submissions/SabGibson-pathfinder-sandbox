import { useEffect } from "react";
import { useState } from "react";
import "./Node.css";
import { motion, useCycle } from "framer-motion";
const Node = ({
  node,
  startNode,
  endNode,
  activeTool,
  mouseIsPressed,
  setMouseIsPressed,
  endDrag,
  nodeToAnimate,
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

  // Define animation variants
  const animationVariants = {
    init: {},

    active: {
      scale: 1,
      rotate: 90,
      transition: { duration: 0.1 },
    },
  };

  //Define useCycle
  const [animation, cycleAnimation] = useCycle("init", "active");

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
      const state = endNode === node;
      setIsEnd(state);
    };
    endReloadNode();
  }, [endNode, node]);

  useEffect(() => {
    //visitReloadNode sets isVisited state in useEffect hook

    const visitReloadNode = () => {
      if (node === nodeToAnimate) {
        setIsVisited(node.isVisited);
        cycleAnimation();
      }
    };

    visitReloadNode();
  }, [nodeToAnimate, node]);
  //Define on node interaction methods

  const placeDeleteWallStart = () => {
    if (activeTool === "make-wall-button") {
      node.isWall = true;
    } else if (activeTool === "delete-wall-button") {
      node.isWall = false;
    }
    setIsWall(node.isWall);
    setMouseIsPressed(true);
  };

  const placeDeleteWallOnEnter = (e) => {
    if (mouseIsPressed && activeTool === "make-wall-button") {
      node.isWall = true;
    } else if (mouseIsPressed && activeTool === "delete-wall-button") {
      node.isWall = false;
    }
    setIsWall(node.isWall);
  };

  const onMouseDown = (e) => {
    if (e.altKey) {
      console.log(node);
    } else {
      placeDeleteWallStart();
    }
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
    <motion.div
      className={`node ${terminalClass} ${wallClass} ${visitedClass}`}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      id={`id-${node.xVal}-${node.yVal}`}
      variants={animationVariants}
      animate={animation}
    ></motion.div>
  );
};

export default Node;

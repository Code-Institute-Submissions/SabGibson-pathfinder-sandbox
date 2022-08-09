// Import external componants
import "./Navigation.css";
import { motion } from "framer-motion";
import { useState } from "react";
// Import  image componants
import wall from "../images/wall.svg";
import bin from "../images/bin.svg";
import flag from "../images/flag.svg";
import play from "../images/play.svg";
import reset from "../images/reset.svg";
import logo from "../images/big-logo-text.svg";
import burger from "../images/burger.svg";
import speed from "../images/fast-forward.svg";
import algo from "../images/algo-select.svg";
// import other react componants
import Dropdown from "./Dropdown";

const Navigation = ({
  selectTool,
  setAlgoSelected,
  setSearchSpeed,
  startSearch,
  resetGrid,
}) => {
  // navigation states
  const [navStatus, setOpenStatus] = useState("false");

  const changeNav = () => {
    if (navStatus !== "true") {
      setOpenStatus("true");
    } else {
      setOpenStatus("false");
    }
  };

  return (
    <div className="nav-comp">
      <nav className={`nav-bar ${navStatus}`}>
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="nav-toggle" onClick={changeNav}>
          <img src={burger} alt="" />
        </div>
        <div className="tool-pane">
          <div className="algo-tools">
            <div className="nav-item">
              <h3 className="nav-label">Select Algorithm</h3>
              <div className="sel-wrapper">
                <motion.img
                  src={algo}
                  alt="build wall icon"
                  className={`action-icon select-icon ${navStatus}`}
                  id="reveal-algo-dropdown"
                  onClick={changeNav}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.01 }}
                />
                <Dropdown
                  className="algo-select"
                  dropdownItems={[
                    "Breadth First Search",
                    "Depth First Search",
                    "A* Search Algorith",
                    "Dijkstra's Search Algorithm",
                  ]}
                  defaultSetting={"Breadth First Search"}
                  externalStateSetter={setAlgoSelected}
                  navStatus={navStatus}
                />
              </div>
            </div>
            <div className="nav-item">
              <h3 className="nav-label">Select Speed</h3>
              <div className="sel-wrapper">
                <motion.img
                  src={speed}
                  alt="select-speed-icon"
                  onClick={changeNav}
                  className={`action-icon select-icon ${navStatus}`}
                  id="reveal-speed-dropdown"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.01 }}
                />
                <Dropdown
                  dropdownItems={["Slow", "Normal", "Fast"]}
                  defaultSetting={"Normal"}
                  externalStateSetter={setSearchSpeed}
                  navStatus={navStatus}
                />
              </div>
            </div>
          </div>
          <div className="tools" onClick={selectTool}>
            <div className="sub-tools">
              <h3 className="nav-label">Start/Reset</h3>
              <motion.img
                src={play}
                alt="start icon"
                className="action-icon"
                id="play-button"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.01 }}
                onClick={startSearch}
              />
              <motion.img
                src={reset}
                onClick={resetGrid}
                alt="reset grid icon"
                className="action-icon"
                id="reset-all-button"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.01 }}
              />
            </div>
            <div className="sub-tools">
              <h3 className="nav-label">Edit Tools</h3>
              <motion.img
                src={flag}
                alt="Start end icon"
                className="action-icon"
                id="place-start-end-button"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.01 }}
              />
              <motion.img
                src={wall}
                alt="build wall icon"
                className="action-icon"
                id="make-wall-button"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.01 }}
              />
              <motion.img
                src={bin}
                alt="delete wall icon"
                className="action-icon"
                id="delete-wall-button"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.01 }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

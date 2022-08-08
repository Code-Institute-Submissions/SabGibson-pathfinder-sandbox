// Import external componants
import "./Navigation.css";
import { motion } from "framer-motion";

// Import  image componants
import wall from "../images/wall.svg";
import bin from "../images/bin.svg";
import flag from "../images/flag.svg";
import play from "../images/play.svg";
import reset from "../images/reset.svg";
import logo from "../images/big-logo-text.svg";

// import other react componants
import Dropdown from "./Dropdown";

const Navigation = ({
  selectTool,
  selectAlgo,
  searchSpeed,
  setAlgoSelected,
  setSearchSpeed,
  startSearch,
}) => {
  return (
    <div className="nav-comp">
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="tool-pane">
          <div className="algo-tools">
            <div className="nav-item">
              <h3 className="nav-label">Select Algorithm</h3>
              <Dropdown
                dropdownItems={[
                  "Breadth First Search",
                  "Depth First Search",
                  "A* Search Algorith",
                  "Dijkstra's Search Algorithm",
                ]}
                defaultSetting={"Breadth First Search"}
                externalStateSetter={setAlgoSelected}
              />
            </div>
            <div className="nav-item">
              <h3 className="nav-label">Select Speed</h3>
              <Dropdown
                dropdownItems={["Slow", "Normal", "Fast"]}
                defaultSetting={"Normal"}
                externalStateSetter={setSearchSpeed}
              />
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

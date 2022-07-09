// Import external componants
import "./Navigation.css";

// Import  imgae componants
import wall from "../images/wall.svg";
import bin from "../images/bin.svg";
import flag from "../images/flag.svg";
import play from "../images/play.svg";
import reset from "../images/reset.svg";
import logo from "../images/big-logo-text.svg";

import Dropdown from "./Dropdown";

const Navigation = () => {
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
                default={"Breadth First Search"}
              />
            </div>
            <div className="nav-item">
              <h3 className="nav-label">Select Speed</h3>
              <Dropdown
                dropdownItems={["Slow", "Normal", "Fast"]}
                default={"Normal"}
              />
            </div>
          </div>
          <div className="tools">
            <div className="sub-tools">
              <h3 className="nav-label">Start/Reset</h3>
              <img src={play} alt="start icon" className="action-icon" />
              <img src={reset} alt="reset grid icon" className="action-icon" />
            </div>
            <div className="sub-tools">
              <h3 className="nav-label">Edit Tools</h3>
              <img src={wall} alt="build wall icon" className="action-icon" />
              <img src={bin} alt="delete wall icon" className="action-icon" />
              <img src={flag} alt="Start end icon" className="action-icon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

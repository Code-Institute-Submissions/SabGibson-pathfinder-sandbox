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
            <Dropdown
              dropdownItems={[
                "Bredth First Search",
                "Depth First Search",
                "A* Search Algorith",
                "Dijkstra's Search Algorithm",
              ]}
            />
            <Dropdown dropdownItems={["Slow", "Normal", "Fast"]} />
          </div>
          <div className="tools">
            <img src={play} alt="start icon" className="action-icon" />
            <img src={reset} alt="reset grid icon" className="action-icon" />
            <img src={wall} alt="build wall icon" className="action-icon" />
            <img src={bin} alt="delete wall icon" className="action-icon" />
            <img src={flag} alt="Start end icon" className="action-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

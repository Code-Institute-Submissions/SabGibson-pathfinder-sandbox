// Import external componants
import "./Navigation.css";

// Import  imgae componants
import wall from "../images/wall.svg";
import bin from "../images/bin.svg";
import flag from "../images/flag.svg";
import play from "../images/play.svg";
import reset from "../images/reset.svg";
import logo from "../images/big-logo-text.svg";

const Navigation = () => {
  return (
    <div className="nav-comp">
      <nav className="nav-bar">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
        </div>
        <div className="tool-pane">
          <div className="algo-tools">
            <div className="dropdown">
              <div className="select">
                <span className="selected">Please Select an algorithm</span>
                <div className="arrow"></div>
              </div>
              <ul className="algo-list">
                <li>Algo 1</li>
                <li>Algo 2</li>
                <li>Algo 3</li>
                <li>Algo 4</li>
              </ul>
            </div>
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

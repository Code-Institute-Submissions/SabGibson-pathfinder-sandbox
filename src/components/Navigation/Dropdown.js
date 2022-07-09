import { useState } from "react";

const Dropdown = (props) => {
  //Defiene componant states
  const [openStatus, setOpenStatus] = useState("false");
  const [dropdownValue, setDropdownValue] = useState([props.default]);

  // unpack dropdown list items
  const dropdownContents = props.dropdownItems;

  // Define compnant interactions
  const changeDropdown = () => {
    if (openStatus !== "true") {
      setOpenStatus("true");
    } else {
      setOpenStatus("false");
    }
  };

  const selectDropdownItem = (e) => {
    setDropdownValue(e.target.innerHTML);
  };

  return (
    <div className="dropdown" onClick={changeDropdown}>
      <div className="select">
        <span className="selected">{dropdownValue}</span>
        <div className={`arrow ${openStatus}`}></div>
      </div>
      <ul className={`algo-list ${openStatus}`} onClick={selectDropdownItem}>
        {dropdownContents.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;

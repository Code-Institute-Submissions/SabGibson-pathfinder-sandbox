import { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = (props) => {
  //Defiene componant states
  const [openStatus, setOpenStatus] = useState("false");
  const [dropdownValue, setDropdownValue] = useState([props.defaultSetting]);

  // unpack dropdown list items
  const dropdownContents = props.dropdownItems;
  const externalStateSetter = props.externalStateSetter;
  const navStatus = props.navStatus;

  // Define compnant interactions
  const changeDropdown = () => {
    if (openStatus !== "true") {
      setOpenStatus("true");
    } else {
      setOpenStatus("false");
    }
  };

  const selectDropdownItem = (e) => {
    externalStateSetter(e.target.innerText);
    setDropdownValue(e.target.innerText);
  };

  return (
    <div className={`dropdown ${navStatus}`} onClick={changeDropdown}>
      <div className="select">
        <span className="selected">{dropdownValue}</span>
        <div className={`arrow ${openStatus}`}></div>
      </div>
      <ul className={`algo-list ${openStatus}`} onClick={selectDropdownItem}>
        {dropdownContents.map((item, index) => {
          return (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2, color: "#fff", originX: 0 }}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
